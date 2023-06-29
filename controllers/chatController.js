const chatModel = require('../model/chat');;
const userModel = require('../model/user');
exports.userChat = async (req, res) => {
        try {
                let userData = await userModel.findOne({ _id: req.user.id });
                if (!userData) {
                        return res.status(404).json({ status: 404, message: "User not found.", data: {} });
                } else {
                        let viewUser = await userModel.findOne({ _id: req.query.userId });
                        if (!viewUser) {
                                return res.status(404).json({ status: 404, message: "Data not found.", data: {} });
                        } else {
                                let chatData = await chatModel.findOne({ $and: [{ $or: [{ user1: userData._id }, { user1: viewUser._id }] }, { $or: [{ user2: viewUser._id }, { user2: userData._id }] }] });
                                if (chatData) {
                                        let messageDetail = {
                                                sender: userData._id,
                                                userName: `${userData.firstName} ${userData.lastName}`,
                                                Type: "TEXT",
                                                message: req.query.message,
                                                time: Date.now()
                                        }
                                        let saveChat = await chatModel.findByIdAndUpdate({ _id: chatData._id }, { $push: { messageDetail: messageDetail }, $set: { userName1: `${userData.firstName} ${userData.lastName}`, userName2: `${viewUser.firstName} ${viewUser.lastName}`, } }, { new: true })
                                        if (saveChat) {
                                                return res.status(200).json({ status: 200, message: "Message send successfully", data: saveChat });
                                        }
                                } else {
                                        let messageDetail = {
                                                sender: userData._id,
                                                userName: `${userData.firstName} ${userData.lastName}`,
                                                Type: "TEXT",
                                                message: req.query.message,
                                                time: Date.now()
                                        }
                                        let obj = {
                                                user1: userData._id,
                                                user2: viewUser._id,
                                                userName1: `${userData.firstName} ${userData.lastName}`,
                                                userName2: `${viewUser.firstName} ${viewUser.lastName}`,
                                                messageDetail: messageDetail,
                                        }
                                        let saveChat = await chatModel.create(obj);
                                        if (saveChat) {
                                                return res.status(200).json({ status: 200, message: "Message send successfully", data: saveChat });
                                        }
                                }
                        }
                }
        } catch (error) {
                console.log(error);
                return res.status(500).json({ status: 500, message: 'Internal server error' });
        }
};
exports.viewChat = async (req, res) => {
        try {
                let user = await userModel.findOne({ _id: req.user.id });
                if (!user) {
                        return res.status(404).json({ status: 404, message: "User not found.", data: {} });
                } else {
                        let newMessages = []
                        return new Promise(async (resolve, reject) => {
                                let view = await chatModel.findOne({ _id: req.query._id }).populate("user1 user2", "firstName lastName").sort({ "messageDetail.time": -1 })
                                if (!view) {
                                        return res.status(404).json({ status: 404, message: "Data not found.", data: {} });
                                } else {
                                        view.messageDetail.map(o => {
                                                if ((view.user2._id).toString() == user._id) {
                                                        o.messageStatus = "Read"
                                                }
                                                newMessages.push(o)
                                        })
                                        let update = await chatModel.findOneAndUpdate({ _id: view._id }, { $set: { messageDetail: newMessages } }, { new: true });
                                        if (update) {
                                                let chat = await chatModel.findOne(update._id).populate("user1 user2", "firstName lastName").sort({ "messages.time": -1 })
                                                return res.status(200).json({ status: 200, message: "Data found successfully.", data: chat });
                                        }
                                }
                        })
                }
        } catch (error) {
                console.log(error)
                return res.status(500).json({ status: 500, message: 'Internal server error' });
        }
};
exports.chattingHistory = async (req, res) => {
        try {
                let userData = await userModel.findOne({ _id: req.user.id });
                if (!userData) {
                        return res.status(404).json({ status: 404, message: "User not found.", data: {} });
                } else {
                        let query = {};
                        if (req.query.userName != (null || undefined)) {
                                query.$or = [{ userName1: req.query.userName, user2: userData._id, deleteChat2: false }, { userName2: req.query.userName, user1: userData._id, deleteChat1: false }]
                        } else {
                                query.$or = [{ user2: userData._id, deleteChat2: false }, { user1: userData._id, deleteChat1: false }]
                        }
                        let unRead = [];
                        let result = await chatModel.find(query).sort({ "messages.createdAt": -1 }).populate("user1 user2", "firstName lastName");
                        if (result.length == 0) {
                                return res.status(200).json({ status: 200, message: "Data found successfully.", data: [] });
                        }
                        else {
                                result.map(o => {
                                        let count = o.messageDetail.filter(obj => obj.messageStatus == "Unread" && ((o.user2._id).toString() == userData._id)).length
                                        let ob = {
                                                status: o.status,
                                                _id: o._id,
                                                user1: o.user1,
                                                user2: o.user2,
                                                messageDetail: o.messageDetail,
                                                totalUnreadMsg: count,
                                                createdAt: o.createdAt,
                                                updatedAt: o.updatedAt,
                                                __v: o.__v
                                        }
                                        unRead.push(ob)
                                })
                                return res.status(200).json({ status: 200, message: "Data found successfully.", data: unRead });
                        }
                }
        } catch (error) {
                return res.status(500).json({ status: 500, message: 'Internal server error' });
        }
};
exports.deleteChat = async (req, res) => {
        try {
                let userData = await userModel.findOne({ _id: req.user.id });
                if (!userData) {
                        return res.status(404).json({ status: 404, message: "User not found.", data: {} });
                } else {
                        let view = await chatModel.findOne({ _id: req.query._id });
                        if (!view) {
                                return res.status(404).json({ status: 404, message: "Data not found.", data: {} });
                        } else {
                                let deleteChat1, deleteChat2;
                                if ((userData._id).toString() == (view.user1).toString()) {
                                        deleteChat1 = true
                                        deleteChat2 = view.deleteChat2
                                }
                                if ((userData._id).toString() == (view.user2).toString()) {
                                        deleteChat2 = true
                                        deleteChat1 = view.deleteChat1
                                }
                                if ((deleteChat1 == true) && (deleteChat2 == true)) {
                                        let chatRes = await chatModel.findByIdAndDelete({ _id: view._id });
                                        if (chatRes) {
                                                response(res, SuccessCode.SUCCESS, view, SuccessMessage.DELETE_SUCCESS);
                                        }
                                }
                                if ((deleteChat1 == true) && (deleteChat2 == false)) {
                                        let messageDetail = [];
                                        view.messageDetail.map(o => {
                                                let messageClear1, messageClear2;
                                                if ((userData._id).toString() == (view.user1).toString()) {
                                                        messageClear1 = true
                                                        messageClear2 = o.messageClear2
                                                }
                                                if ((userData._id).toString() == (view.user2).toString()) {
                                                        messageClear1 = o.messageClear1
                                                        messageClear2 = true
                                                }
                                                let obj = {
                                                        messageClear1: messageClear1,
                                                        messageClear2: messageClear2,
                                                        sender: o.sender,
                                                        userName: o.userName,
                                                        Type: o.Type,
                                                        message: o.message,
                                                        time: o.time,
                                                        messageStatus: o.messageStatus,
                                                        _id: o._id
                                                }
                                                messageDetail.push(obj)
                                        });
                                        let update = await chatModel.findByIdAndUpdate({ _id: view._id }, { $set: { messageDetail: messageDetail, deleteChat1: deleteChat1, deleteChat2: deleteChat2 } }, { new: true });
                                        if (update) {
                                                return res.status(200).json({ status: 200, message: "Data found successfully.", data: update });
                                        }
                                }
                                if ((deleteChat1 == false) && (deleteChat2 == true)) {
                                        let messageDetail = [];
                                        view.messageDetail.map(o => {
                                                let messageClear1, messageClear2;
                                                if ((userData._id).toString() == (view.user1).toString()) {
                                                        messageClear1 = true
                                                        messageClear2 = o.messageClear2
                                                }
                                                if ((userData._id).toString() == (view.user2).toString()) {
                                                        messageClear1 = o.messageClear1
                                                        messageClear2 = true
                                                }
                                                let obj = {
                                                        messageClear1: messageClear1,
                                                        messageClear2: messageClear2,
                                                        sender: o.sender,
                                                        userName: o.userName,
                                                        Type: o.Type,
                                                        message: o.message,
                                                        time: o.time,
                                                        messageStatus: o.messageStatus,
                                                        _id: o._id
                                                }
                                                messageDetail.push(obj)
                                        });
                                        let update = await chatModel.findByIdAndUpdate({ _id: view._id }, { $set: { messageDetail: messageDetail, deleteChat1: deleteChat1, deleteChat2: deleteChat2 } }, { new: true });
                                        if (update) {
                                                return res.status(200).json({ status: 200, message: "Data found successfully.", data: update });
                                        }
                                }
                        }
                }
        } catch (error) {
                console.log(error);
                return res.status(500).json({ status: 500, message: 'Internal server error' });
        }
};
exports.clearChat = async (req, res) => {
        try {
                let userData = await userModel.findOne({ _id: req.user.id });
                if (!userData) {
                        return res.status(404).json({ status: 404, message: "User not found.", data: {} });
                } else {
                        let view = await chatModel.findOne({ _id: req.query._id });
                        if (!view) {
                                return res.status(404).json({ status: 404, message: "Data not found.", data: {} });
                        } else {
                                let messageDetail = [];
                                view.messageDetail.map(o => {
                                        let messageClear1, messageClear2;
                                        if ((userData._id).toString() == (view.user1).toString()) {
                                                messageClear1 = true
                                                messageClear2 = o.messageClear2
                                        }
                                        if ((userData._id).toString() == (view.user2).toString()) {
                                                messageClear2 = true
                                                messageClear1 = o.messageClear1
                                        }
                                        let obj = {
                                                messageClear1: messageClear1,
                                                messageClear2: messageClear2,
                                                sender: o.sender,
                                                userName: o.userName,
                                                Type: o.Type,
                                                message: o.message,
                                                time: o.time,
                                                messageStatus: o.messageStatus,
                                                _id: o._id
                                        }
                                        messageDetail.push(obj)
                                });
                                let update = await chatModel.findByIdAndUpdate({ _id: view._id }, { $set: { messageDetail: messageDetail } }, { new: true });
                                if (update) {
                                        return res.status(200).json({ status: 200, message: "Data found successfully.", data: update });
                                }
                        }
                }
        } catch (error) {
                console.log(error);
                return res.status(500).json({ status: 500, message: 'Internal server error' });
        }
};
exports.deleteAllChat = async (req, res) => {
        try {
                let userData = await userModel.findOne({ _id: req.user.id });
                if (!userData) {
                        return res.status(404).json({ status: 404, message: "User not found.", data: {} });
                } else {
                        let view = await chatModel.find({ $or: [{ user2: userData._id, deleteChat2: false }, { user1: userData._id, deleteChat1: false }] });
                        if (view.length == 0) {
                                return res.status(404).json({ status: 404, message: "Data not found.", data: {} });
                        } else {
                                for (let i = 0; i < view.length; i++) {
                                        let count = 0;
                                        let deleteChat1, deleteChat2;
                                        if ((userData._id).toString() == (view[i].user1).toString()) {
                                                deleteChat1 = true
                                                deleteChat2 = view[i].deleteChat2
                                        }
                                        if ((userData._id).toString() == (view[i].user2).toString()) {
                                                deleteChat2 = true
                                                deleteChat1 = view[i].deleteChat1
                                        }
                                        if ((deleteChat1 == true) && (deleteChat2 == true)) {
                                                await chatModel.findByIdAndDelete({ _id: view[i]._id });
                                                count++;
                                        }
                                        if ((deleteChat1 == true) && (deleteChat2 == false)) {
                                                let messageDetail = [];
                                                view[i].messageDetail.map(o => {
                                                        let messageClear1, messageClear2;
                                                        if ((userData._id).toString() == (view[i].user1).toString()) {
                                                                messageClear1 = true
                                                                messageClear2 = o.messageClear2
                                                        }
                                                        if ((userData._id).toString() == (view[i].user2).toString()) {
                                                                messageClear1 = o.messageClear1
                                                                messageClear2 = true
                                                        }
                                                        let obj = {
                                                                messageClear1: messageClear1,
                                                                messageClear2: messageClear2,
                                                                sender: o.sender,
                                                                userName: o.userName,
                                                                Type: o.Type,
                                                                message: o.message,
                                                                time: o.time,
                                                                messageStatus: o.messageStatus,
                                                                _id: o._id
                                                        }
                                                        messageDetail.push(obj)
                                                });
                                                let update = await chatModel.findByIdAndUpdate({ _id: view[i]._id }, { $set: { messageDetail: messageDetail, deleteChat1: deleteChat1, deleteChat2: deleteChat2 } }, { new: true });
                                                count++;
                                        }
                                        if ((deleteChat1 == false) && (deleteChat2 == true)) {
                                                let messageDetail = [];
                                                view[i].messageDetail.map(o => {
                                                        let messageClear1, messageClear2;
                                                        if ((userData._id).toString() == (view[i].user1).toString()) {
                                                                messageClear1 = true
                                                                messageClear2 = o.messageClear2
                                                        }
                                                        if ((userData._id).toString() == (view[i].user2).toString()) {
                                                                messageClear1 = o.messageClear1
                                                                messageClear2 = true
                                                        }
                                                        let obj = {
                                                                messageClear1: messageClear1,
                                                                messageClear2: messageClear2,
                                                                sender: o.sender,
                                                                userName: o.userName,
                                                                Type: o.Type,
                                                                message: o.message,
                                                                time: o.time,
                                                                messageStatus: o.messageStatus,
                                                                _id: o._id
                                                        }
                                                        messageDetail.push(obj)
                                                });
                                                let update = await chatModel.findByIdAndUpdate({ _id: view[i]._id }, { $set: { messageDetail: messageDetail, deleteChat1: deleteChat1, deleteChat2: deleteChat2 } }, { new: true });
                                                count++;
                                        }
                                        if (count == view.length) {
                                                let view = await chatModel.find({ $or: [{ user2: userData._id, deleteChat2: true }, { user1: userData._id, deleteChat1: true }] });
                                                if (view.length == 0) {
                                                        return res.status(404).json({ status: 404, message: "Data not found.", data: {} });
                                                } else {
                                                        return res.status(200).json({ status: 200, message: "Data found successfully.", data: view });
                                                }
                                        }
                                }
                        }
                }
        } catch (error) {
                return res.status(500).json({ status: 500, message: 'Internal server error' });
        }
};
