const mongoose = require("mongoose");
const quesSchema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  questionTime: {
    type: String,
    enum: ["07", "09", "11", "13", "15", "17", "19", "21", "23"]
  },
  questionDate:{
    type: String
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "question",
  },
  option_1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  option_2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  option_3: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  option_4: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  option_5: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  option_6: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  option_7: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  option_8: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  option_9: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  option_10: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  option_11: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  option_12: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  answer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  suffleCount: {
    type: Number,
    default: 0
  }
});

const quesModel = mongoose.model("questionAnswer", quesSchema);
module.exports = quesModel;
