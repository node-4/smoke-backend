const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
  phone: {
    type: String,
    require: false,
    default: "",
  },
  google_id: {
    type: String,
    default: "",
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  otp: {
    type: String,
    default: "",
  },
  otpVerification: {
    type: Boolean,
    default: false,
  },
  otpExpire: {
    type: Date,
  },
  profileImage: {
    type: String,
    default: "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
  },
  school: {
    type: objectid,
    ref: "school",
  },
  member: {
    type: String,
    default: "",
  },
  latitude: {
    type: String,
    default: "",
  },
  longitude: {
    type: String,
    default: "",
  },
  pinCode: {
    type: String,
  },
  educationlevel: {
    type: String,
    default: "",
  },
  grade: {
    type: String,
    default: "",
  },
  age: {
    type: String,
    default: "",
  },
  state: {
    type: objectid,
    ref: "state",
  },
  city: {
    type: objectid,
    ref: "city",
  },
  district: {
    type: objectid,
    ref: "district",
  },
  year: {
    type: String,
    default: "",
  },
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  userName: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  flameUser: {
    type: Array,
    ref: "userProfile",
  },
  flameCount: {
    type: Number,
    default: 0
  },
  friendCount: {
    type: Number,
    default: 0
  },
  friends: {
    type: Array,
    ref: "userProfile",
  },
  hideUser: {
    type: Array,
    ref: "userProfile",
  },
  blockUser: {
    type: Array,
    ref: "userProfile",
  },
  coin: {
    type: Number,
    default: 0
  },
  poleUser: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userProfile"
    },
    count: {
      type: Number,
      default: 0
    },
  }],
  userType: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER"
  },
  status: {
    type: String,
    enum: ["Active", "Block", "Delete"],
    default: "Active"
  },
  editProfile: {
    type: Number,
    default: 0
  },
  photo: {
    type: String,
    default:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  },
}, { timestamps: true });

const userModel = mongoose.model("userProfile", userSchema);
module.exports = userModel;
