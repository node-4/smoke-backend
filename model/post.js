const mongoose = require('mongoose');
const objectId = mongoose.Types.ObjectId;

const postSchema = mongoose.Schema({
  image_vedio: {
    type: String,
  },
  video: {
    type: String,
    default: ""
  },
  link: {
    type: String,
    default: ""
  },
  document: {
    type: String,
    default: ""
  },
  desc: {
    type: String
  },
  userId: {
    type: objectId,
    ref: "userProfile"
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  likeUser: [{
    type: objectId,
    ref: "userProfile",
  }],
  commentCount: {
    type: Number,
    default: 0,
  },
  Comment: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userProfile",
    },
    Comment: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now,
    },
  }],
  date: {
    type: Date,
    default: Date.now,
  },
})


const postmodel = mongoose.model('post', postSchema);

module.exports = postmodel;
