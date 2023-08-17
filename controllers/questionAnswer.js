const questionAnswer = require("../model/questionAnswer");
const questionHistoryCoin = require("../model/questionHistoryCoin");
const user = require("../model/user");
const inbox = require("../model/inbox");
const activity = require('../model/activity');
exports.getAllQuestions = async (req, res) => {
        try {
                let hrs = new Date(Date.now()).getHours();
                let date = new Date(Date.now()).getDate();
                let month = new Date(Date.now()).getMonth() + 1;
                let year = new Date(Date.now()).getFullYear();
                let fullDate = (`${date}/${month}/${year}`).toString()
                let min = new Date(Date.now()).getMinutes();
                let hrs1, hr;
                console.log(hrs);
                if (hrs < 10) {
                        hrs1 = '' + 0 + hrs;
                } else {
                        hrs1 = hrs
                }
                if (min) {
                        if (min > 30) {
                                hr = hrs1 + 6
                        } else {
                                hr = hrs1 + 5
                        }
                }
                console.log({ userID: req.user._id, serverTime: hr, questionTime: hr, questionDate: fullDate });
                const questions = await questionAnswer.find({ userID: req.user._id, questionTime: "15", questionDate: fullDate }).populate({ path: 'question option_1 option_2 option_3 option_4 option_5 option_6 option_7 option_8 option_9 option_10 option_11 option_12 option_13 option_14', select: 'question emoji type firstName lastName userName' },);
                // const questions = await questionAnswer.find({ userID: req.user._id, questionDate: fullDate }).populate({ path: 'question option_1 option_2 option_3 option_4 option_5 option_6 option_7 option_8 option_9 option_10 option_11 option_12', select: 'question emoji type firstName lastName userName' },);
                if (questions.length == 0) {
                        return res.status(404).json({ status: 404, message: "Question not found.", data: {} });
                }
                return res.status(200).json({ status: 200, message: "Question found.", data: questions });
        } catch (error) {
                console.error(error);
                return res.status(500).json({ error: "An error occurred while retrieving the questions." });
        }
};
exports.getQuestionById = async (req, res) => {
        const { questionId } = req.params;
        try {
                const question = await questionAnswer.findById(questionId).populate({ path: 'question option_1 option_2 option_3 option_4 option_5 option_6 option_7 option_8 option_9 option_10 option_11 option_12 option_13 option_14', select: 'question firstName lastName userName' },);;
                if (!question) {
                        return res.status(404).json({ status: 404, message: "Question not found.", data: {} });
                }
                return res.status(200).json({ status: 200, message: "Question found.", data: question });
        } catch (error) {
                console.error(error);
                return res.status(500).json({ error: "An error occurred while retrieving the question." });
        }
};
exports.suffle = async (req, res) => {
        try {
                const { questionId } = req.params;
                if (!questionId) {
                        return res.status(400).json({ error: "Question Id are required." });
                } else {
                        const question = await questionAnswer.findById(questionId);
                        if (!question) {
                                return res.status(404).json({ status: 404, message: "Question not found.", data: {} });
                        } else {
                                const updatedQuestion = await questionAnswer.findByIdAndUpdate(questionId, { suffleCount: question.suffleCount + 1 }, { new: true });
                                if (!updatedQuestion) {
                                        return res.status(404).json({ error: "Question not found." });
                                }
                                return res.json(updatedQuestion);
                        }
                }
        } catch (error) {
                console.error(error);
                return res.status(500).json({ error: "An error occurred while updating the question." });
        }
};
exports.giveAnswer = async (req, res) => {
        try {
                const { questionId } = req.params;
                if (!questionId) {
                        return res.status(400).json({ error: "Question Id are required." });
                } else {
                        const question = await questionAnswer.findById(questionId);
                        if (!question) {
                                return res.status(404).json({ status: 404, message: "Question not found.", data: {} });
                        } else {
                                const updatedQuestion = await questionAnswer.findByIdAndUpdate(question._id, { answer: req.body.answer }, { new: true });
                                if (!updatedQuestion) {
                                        return res.status(404).json({ status: 404, error: "Question not found." });
                                } else {
                                        let findUser = await user.findById({ _id: req.body.answer });
                                        if (findUser) {
                                                const updated = await user.findByIdAndUpdate(findUser._id, { $push: { flameUser: req.user._id }, $set: { flameCount: findUser.flameCount + 1 } }, { new: true });
                                                const Data = await inbox.create({ userId: findUser._id, flameUser: req.user.id, questionId: updatedQuestion._id });
                                                if (updated && Data) {
                                                        let obj = { userId: req.user._id, inboxId: Data._id, description: "Some one Chose you..", logType: "Inbox", }
                                                        const savedFriendRequest = await activity.create(obj);
                                                        let findHistoryCoin = await questionHistoryCoin.findOne({ user: req.user.id, questionTime: question.questionTime });
                                                        if (findHistoryCoin) {
                                                                if (findHistoryCoin.answerCount == 0) {
                                                                        let update = await questionHistoryCoin.findByIdAndUpdate({ _id: findHistoryCoin._id }, { $set: { answerCount: findHistoryCoin.answerCount + 1, startQuize: new Date(Date.now()) } }, { new: true });
                                                                        if (update) {
                                                                                return res.status(200).json({ status: 200, message: "Answer update successfully." });
                                                                        }
                                                                } else if (findHistoryCoin.answerCount == 11) {
                                                                        if (findHistoryCoin.startQuize < Date.now()) {
                                                                                let findUser = await user.findById({ _id: req.user._id });
                                                                                let updateUser = await user.findByIdAndUpdate({ _id: findUser._id }, { $set: { coin: findUser.coin + 15 } }, { new: true })
                                                                                let update = await questionHistoryCoin.findByIdAndDelete({ _id: findHistoryCoin._id });
                                                                                if (update) {
                                                                                        return res.status(200).json({ status: 200, message: "Answer update successfully." });
                                                                                }
                                                                        }
                                                                } else {
                                                                        let update = await questionHistoryCoin.findByIdAndUpdate({ _id: findHistoryCoin._id }, { $set: { answerCount: findHistoryCoin.answerCount + 1 } }, { new: true });
                                                                        if (update) {
                                                                                return res.status(200).json({ status: 200, message: "Answer update successfully." });
                                                                        }
                                                                }
                                                        } else {
                                                                let data = {
                                                                        user: req.user.id,
                                                                        questionTime: question.questionTime,
                                                                        answerCount: 1,
                                                                        startQuize: new Date(Date.now() + 2 * 60 * 60 * 1000)
                                                                }
                                                                const Data = await questionHistoryCoin.create(data);
                                                                if (Data) {
                                                                        return res.status(200).json({ status: 200, message: "Answer update successfully." });
                                                                }
                                                        }

                                                }
                                        }
                                }
                        }
                }
        } catch (error) {
                console.error(error);
                return res.status(500).json({ error: "An error occurred while updating the question." });
        }
};
exports.getInbox = async (req, res) => {
        try {
                let findUser = await inbox.find({ userId: req.user._id }).populate({ path: 'flameUser', select: 'gender' });
                if (findUser.length > 0) {
                        return res.status(200).json({ msg: "Inbox detail fetch successfully.", data: findUser });
                } else {
                        return res.status(404).json({ status: 404, message: "Inbox detail not found.", data: {} });
                }
        } catch (err) {
                console.log(err);
                return res.status(400).json({
                        message: err.message,
                });
        }
};
exports.getInboxById = async (req, res) => {
        try {
                let findUser = await inbox.findById({ _id: req.params.id }).populate('flameUser questionId');
                if (findUser) {
                        let update = await inbox.findByIdAndUpdate({ _id: findUser._id }, { $set: { view: true } }, { new: true }).populate({ path: 'flameUser' }, {
                                path: 'questionId', populate: [{ path: "option_1", model: "userProfile", select: "firstName lastName userName", }, { path: "option_2", model: "userProfile", select: "firstName lastName userName", }, { path: "option_3", model: "userProfile", select: "firstName lastName userName", }, { path: "option_4", model: "userProfile", select: "firstName lastName userName", }, { path: "option_5", model: "userProfile", select: "firstName lastName userName", }, { path: "option_6", model: "userProfile", select: "firstName lastName userName", }, { path: "option_7", model: "userProfile", select: "firstName lastName userName", }, { path: "option_8", model: "userProfile", select: "firstName lastName userName", }, { path: "option_9", model: "userProfile", select: "firstName lastName userName", }, { path: "option_10", model: "userProfile", select: "firstName lastName userName", }, { path: "option_11", model: "userProfile", select: "firstName lastName userName", }, { path: "option_12", model: "userProfile", select: "firstName lastName userName", }, { path: "option_13", model: "userProfile", select: "firstName lastName userName", }, { path: "option_14", model: "userProfile", select: "firstName lastName userName", },],
                        });
                        return res.status(200).json({ msg: "Inbox detail fetch successfully.", data: update });
                } else {
                        return res.status(404).json({ status: 404, message: "Inbox detail not found.", data: {} });
                }
        } catch (err) {
                console.log(err);
                return res.status(400).json({
                        message: err.message,
                });
        }
};
exports.getAllQuestionsByAdmin = async (req, res) => {
        try {
                const { search, questionTime, page, limit } = req.query;
                let query = {};
                if (search != 'null') {
                        query.$or = [
                                { "questionDate": search },
                        ]
                }
                if (search != (null || undefined)) {
                        query.$or = [
                                { "questionDate": search },
                        ]
                }
                if (questionTime != (null || undefined)) {
                        query.$or = [
                                { "questionTime": questionTime },
                        ]

                }
                let options = {
                        page: Number(page) || 1,
                        limit: Number(limit) || 12,
                        sort: { createdAt: -1 },
                        populate: { path: 'userID question option_1 option_2 option_3 option_4 option_5 option_6 option_7 option_8 option_9 option_10 option_11 option_12 option_13 option_14', select: 'question emoji type firstName lastName userName' }
                };
                let data = await questionAnswer.paginate(query, options);
                return res.status(200).json({ status: 200, message: "Question data found.", data: data });

        } catch (err) {
                return res.status(500).send({ msg: "internal server error ", error: err.message, });
        }
};
exports.hideInboxFromActivity = async (req, res) => {
        try {
                let findUser = await inbox.findById({ _id: req.params.id });
                if (findUser) {
                        let update = await activity.findOneAndUpdate({ inboxId: findUser._id }, { $set: { hide: true } }, { new: true })
                        return res.status(200).json({ msg: "Hide from activity.", data: update });
                } else {
                        return res.status(404).json({ status: 404, message: "Inbox detail not found.", data: {} });
                }
        } catch (err) {
                console.log(err);
                return res.status(400).json({
                        message: err.message,
                });
        }
};