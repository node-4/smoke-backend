var bcrypt = require("bcryptjs");
const path = require("path");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const userSchema = require("../model/user");
const cloudinary = require("cloudinary");
var newOTP = require("otp-generators");
const FriendRequest = require('../model/add_request');
const schoolModel = require('../model/school');
cloudinary.config({
        cloud_name: "https-www-pilkhuwahandloom-com",
        api_key: "886273344769554",
        api_secret: "BVicyMGE04PrE7vWSorJ5txKmPs",
});
const axios = require('axios');
exports.createUser = async (req, res) => {
        try {
                let photo;
                if (req.body.profileImage) {
                        var result = await cloudinary.uploader.upload(req.body.profileImage, { resource_type: "auto" });
                        photo = result.secure_url;
                }
                req.body.profileImage = photo;
                const userData = req.body;
                let findSchool = await schoolModel.findById({ _id: req.body.school });
                if (!findSchool) {
                        return res.status(404).json({ status: 404, message: 'School not found' });
                }
                const newUser = await userSchema.create(userData);
                if (newUser) {
                        let updateSchool = await schoolModel.findByIdAndUpdate({ _id: findSchool._id }, { $set: { studentCount: findSchool.studentCount + 1 }, $push: { User: newUser._id } }, { new: true });
                        if (updateSchool) {
                                return res.status(201).json(newUser);
                        }
                }
        } catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Internal server error' });
        }
}
exports.login = async (req, res) => {
        try {
                const { phone } = req.body;
                // Generate a random 6-digit OTP
                const data = await userSchema.findOne({ phone: phone });
                if (!data || data.length == 0) {
                        return res.status(400).json({ msg: "invalid phone" });
                }
                const otp = newOTP.generate(4, { alphabets: false, upperCase: false, specialChar: false, });
                let update = await userSchema.findByIdAndUpdate({ _id: data._id }, { $set: { otpVerification: false, otpExpire: new Date(Date.now() + 5 * 60 * 1000), otp: otp } }, { new: true });
                res.status(200).send({ message: "OTP sent successfully", newUser: update });
        } catch (err) {
                console.log(err);
                return res.status(400).send({ message: err.message });
        }
};
exports.verify = async (req, res) => {
        try {
                console.log("---------------------------------------");
                const { otp } = req.body;
                const user = await userSchema.findById(req.params.id);
                if (!user) {
                        return res.status(404).send({ message: "user not found" });
                }
                if (user.otp !== otp || user.otpExpiration < Date.now()) {
                        return res.status(400).json({ message: "Invalid OTP" });
                }
                const updated = await userSchema.findByIdAndUpdate({ _id: user._id }, { accountVerification: true }, { new: true });
                const accessToken = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '24h', });
                res.status(200).send({ message: "logged in successfully", accessToken: accessToken, });
        } catch (err) {
                console.log(err.message);
                res.status(500).send({ error: "internal server error" + err.message });
        }
};
exports.socialLogin = async (req, res) => {
        try {
                const { google_id } = req.body
                const user = await userSchema.findOne({ google_id: google_id });
                if (!user || user.length == 0) {
                        const data1 = { google_id: req.body.google_id, name: req.body.name, email: req.body.email, phone: req.body.phone, };
                        const create = await userSchema.create(data1);
                        const accessToken1 = jwt.sign({ id: create._id }, process.env.KEY, { expiresIn: "1d", })
                        res.setHeader("x-api-key", /* "Bearer "*/ +accessToken1);
                        return res.status(200).send({ message: "logged in successfully", accessToken: accessToken1, data: create, });
                } else {
                        const accessToken = jwt.sign({ id: user._id }, process.env.KEY, { expiresIn: "1d", });
                        res.setHeader("x-api-key", /* "Bearer "*/ +accessToken);
                        return res.status(200).send({ message: "logged in successfully", accessToken: accessToken, data: user, });
                }
        } catch (err) {
                console.log(err);
                return res
                        .status(500)
                        .send({ error: "internal server error" + err.message });
        }
};
exports.userUpdate = async (req, res) => {
        try {
                const data = {
                        name: req.body.name,
                        email: req.body.email,
                        phone: req.body.phone,
                        profileImage: req.body.profileImage,
                        age: req.body.age,
                        address: req.body.address,
                        language: req.body.language,
                        location: req.body.location,
                        password: bcrypt.hashSync(req.body.password, 8),
                        confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),
                        otp: req.body.otp,
                        google_id: req.body.google_id,
                }
                const user = await userSchema.findByIdAndUpdate({ _id: req.user._id }, data, { new: true, });
                return res.status(200).json({ msg: "profile details updated", user: user });
        } catch (err) {
                console.log(err);
                return res.status(400).json({
                        message: err.message,
                });
        }
};
exports.getUserflame = async (req, res) => {
        try {
                let findUser = await userSchema.findById({ _id: req.user.id }).populate({ path: 'flameUser', select: '_id firstName lastName userName' });
                if (findUser) {
                        return res.status(200).json({ msg: "profile details updated", data: { user: findUser } });
                } else {
                        return res.status(404).json({ status: 404, message: "User not found.", data: {} });
                }
        } catch (err) {
                console.log(err);
                return res.status(400).json({ message: err.message, });
        }
};
exports.getUserFriends = async (req, res) => {
        try {
                let findUser = await userSchema.findById({ _id: req.user.id }).populate({ path: 'friends', select: '_id firstName lastName userName' });
                if (findUser) {
                        return res.status(200).json({ msg: "profile details updated", data: { user: findUser } });
                } else {
                        return res.status(404).json({ status: 404, message: "User not found.", data: {} });
                }
        } catch (err) {
                console.log(err);
                return res.status(400).json({ message: err.message, });
        }
};
exports.getProfile = async (req, res) => {
        try {
                let findUser = await userSchema.findById({ _id: req.user.id }).select('-flameUser');
                if (findUser) {
                        return res.status(200).json({ msg: "profile details updated", data: { user: findUser } });
                } else {
                        return res.status(404).json({ status: 404, message: "User not found.", data: {} });
                }
        } catch (err) {
                console.log(err);
                return res.status(400).json({
                        message: err.message,
                });
        }
};