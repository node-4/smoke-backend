const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var newOTP = require("otp-generators");
const User = require("../model/user");
const banner = require('../model/banner');
const FriendRequest = require('../model/add_request');
const schoolModel = require('../model/school');
const PostModel = require('../model/post');
const activity = require('../model/activity');
exports.registration = async (req, res) => {
    const { phone, email } = req.body;
    try {
        req.body.email = email.split(" ").join("").toLowerCase();
        let user = await User.findOne({ email: req.body.email, userType: "ADMIN" });
        if (!user) {
            req.body.password = bcrypt.hashSync(req.body.password, 8);
            req.body.userType = "ADMIN";
            req.body.accountVerification = true;
            const userCreate = await User.create(req.body);
            return res.status(200).send({
                message: "registered successfully ",
                data: userCreate,
            });
        } else {
            return res.status(409).send({ message: "Already Exist", data: [] });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};
exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email, userType: "ADMIN" });
        if (!user) {
            return res
                .status(404)
                .send({ message: "user not found ! not registered" });
        }
        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (!isValidPassword) {
            return res.status(401).send({ message: "Wrong password" });
        }
        const accessToken = jwt.sign({ id: user._id }, process.env.SECRET, {
            expiresIn: '365d',
        });
        return res.status(201).send({ data: user, accessToken: accessToken });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Server error" + error.message });
    }
};
exports.update = async (req, res) => {
    try {
        const { fullName, firstName, lastName, email, phone, password } = req.body;
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).send({ message: "not found" });
        }
        user.fullName = fullName || user.fullName;
        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.email = email || user.email;
        user.phone = phone || user.phone;
        if (req.body.password) {
            user.password = bcrypt.hashSync(password, 8) || user.password;
        }
        const updated = await user.save();
        return res.status(200).send({ message: "updated", data: updated });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "internal server error " + err.message,
        });
    }
};
exports.AddBanner = async (req, res) => {
    try {
        let fileUrl;
        if (req.file) {
            fileUrl = req.file ? req.file.path : "";
        }
        const data = { image: fileUrl, desc: req.body.desc }
        const Data = await banner.create(data);
        return res.status(200).json({ status: 200, message: "Banner is Addded ", data: Data })
    } catch (err) {
        console.log(err);
        return res.status(501).send({ status: 501, message: "server error.", data: {}, });
    }
};
exports.getBanner = async (req, res) => {
    try {
        const Banner = await banner.find();
        if (Banner.length == 0) {
            return res.status(404).json({ status: 404, message: "No data found", data: {} });
        }
        return res.status(200).json({ status: 200, message: "All banner Data found successfully.", data: Banner })
    } catch (err) {
        console.log(err);
        return res.status(501).send({ status: 501, message: "server error.", data: {}, });
    }
};
exports.getBannerById = async (req, res) => {
    try {
        const Banner = await banner.findById({ _id: req.params.id });
        if (!Banner) {
            return res.status(404).json({ status: 404, message: "No data found", data: {} });
        }
        return res.status(200).json({ status: 200, message: "Data found successfully.", data: Banner })
    } catch (err) {
        console.log(err);
        return res.status(501).send({ status: 501, message: "server error.", data: {}, });
    }
};
exports.DeleteBanner = async (req, res) => {
    try {
        const Banner = await banner.findById({ _id: req.params.id });
        if (!Banner) {
            return res.status(404).json({ status: 404, message: "No data found", data: {} });
        }
        await banner.findByIdAndDelete({ _id: req.params.id });
        return res.status(200).json({ status: 200, message: "Banner delete successfully.", data: {} })
    } catch (err) {
        console.log(err);
        return res.status(501).send({ status: 501, message: "server error.", data: {}, });
    }
};
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ userType: "USER" });
        if (users.length == 0) {
            return res.status(404).json({ status: 404, message: "User not found" });
        } else {
            return res.status(200).json({ status: 200, message: "All Employee found.", data: users, });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
exports.blockUnblockUser = async (req, res) => {
    try {
        let result = await User.findOne({ _id: req.params.id, status: { $ne: "Delete" } });
        if (!result) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }
        else {
            if (result.status == "Active") {
                let updateResult = await User.findOneAndUpdate({ _id: result._id }, { $set: { status: "Block" } }, { new: true });
                if (updateResult) {
                    return res.status(200).json({ status: 200, message: "User Block successfully.", data: updateResult, });
                }
            } else if (result.status == "BLOCK") {
                let updateResult = await User.findOneAndUpdate({ _id: result._id }, { $set: { status: "Active" } }, { new: true });
                if (updateResult) {
                    return res.status(200).json({ status: 200, message: "User un Block successfully.", data: updateResult, });
                }
            }
        }
    } catch (error) {
        response(res, ErrorCode.WENT_WRONG, {}, ErrorMessage.SOMETHING_WRONG);
    }
};
exports.deleteUser = async (req, res) => {
    try {
        const Banner = await User.findById({ _id: req.params.id });
        if (!Banner) {
            return res.status(404).json({ status: 404, message: "No data found", data: {} });
        }
        let findUser = await User.find();
        if (findUser.length > 1) {
            for (let i = 0; i < findUser.length; i++) {
                if (findUser[i].blockUser.includes(req.params.id)) {
                    await userSchema.findByIdAndUpdate({ _id: findUser[i]._id }, { $pull: { blockUser: req.params.id } }, { new: true })
                }
                if (findUser[i].hideUser.includes(req.params.id)) {
                    await userSchema.findByIdAndUpdate({ _id: findUser[i]._id }, { $pull: { hideUser: req.params.id } }, { new: true })
                }
                if (findUser[i].flameUser.includes(req.params.id)) {
                    await userSchema.findByIdAndUpdate({ _id: findUser[i]._id }, { $pull: { flameUser: req.params.id, flameCount: findUser[i].flameCount - 1 } }, { new: true })
                }
                if (findUser[i].friends.includes(req.params.id)) {
                    await userSchema.findByIdAndUpdate({ _id: findUser[i]._id }, { $pull: { friends: req.params.id, friendCount: findUser[i].friendCount - 1 } }, { new: true })
                }
            }
        }
        await User.findByIdAndDelete({ _id: req.params.id });
        return res.status(200).json({ status: 200, message: "user delete successfully.", data: {} })
    } catch (err) {
        return res.status(501).send({ status: 501, message: "server error.", data: {}, });
    }
};
exports.dashboard = async (req, res) => {
    try {

        let totalUsers = await User.find().count({ userType: 'USER' });
        let totalMale = await User.find({ gender: "male", userType: 'USER' }).count();
        let totalFemale = await User.find({ gender: "female", userType: 'USER' }).count();
        let totalPost = await PostModel.find({}).count({});
        let obj = {
            totalUsers: totalUsers,
            totalMale: totalMale,
            totalFemale: totalFemale,
            totalPost: totalPost
        }
        return res.status(200).json({ status: 200, message: "Dashboard successfully.", data: obj })
    } catch (error) {
        console.log("380====================>", error);
        return res.status(501).send({ status: 501, message: "server error.", data: {}, });
    }
};
exports.dashboardGraph = async (req, res) => {
    try {

        let totalUsers = await User.find().count({ userType: 'USER' });
        let totalMale = await User.find({ gender: "male", userType: 'USER' })
        let totalFemale = await User.find({ gender: "female", userType: 'USER' });
        let obj = {
            totalUsers: totalUsers,
            totalMale: totalMale,
            totalFemale: totalFemale,
        }
        return res.status(200).json({ status: 200, message: "Dashboard successfully.", data: obj })
    } catch (error) {
        console.log("380====================>", error);
        return res.status(501).send({ status: 501, message: "server error.", data: {}, });
    }
};