const mongoose = require('mongoose');

const questionHistoryCoinSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userProfile',
    required: true,
  },
  questionTime: {
    type: String,
    enum: ["07", "09", "11", "13", "15", "17", "19", "21", "23"]
  },
  startQuize: {
    type: Date,
  },
  answerCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const QuestionHistoryCoin = mongoose.model('questionHistoryCoin', questionHistoryCoinSchema);
module.exports = QuestionHistoryCoin;
