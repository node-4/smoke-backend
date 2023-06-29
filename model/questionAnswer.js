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
  questionDate: {
    type: String
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "question",
  },
  type: {
    type: String,
  },
  condition1: {
    type: Boolean,
    default: true
  },
  condition2: {
    type: Boolean,
    default: false
  },
  priority2_1: {
    type: Boolean,
    default: true
  },
  priority2_2: {
    type: Boolean,
    default: false
  },
  condition3: {
    type: Boolean,
    default: false
  },
  priority1: {
    type: Boolean,
    default: true
  },
  priority2: {
    type: Boolean,
    default: false
  },
  priority3: {
    type: Boolean,
    default: false
  },
  priority4: {
    type: Boolean,
    default: false
  },
  priority5: {
    type: Boolean,
    default: false
  },
  optionCount: {
    type: Number,
    default: 0
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
