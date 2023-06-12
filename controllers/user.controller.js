var bcrypt = require("bcryptjs");
const path = require("path");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const userSchema = require("../model/user");
const cloudinary = require("cloudinary");
var newOTP = require("otp-generators");
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
                const newUser = await userSchema.create(userData);

                return res.status(201).json(newUser);
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