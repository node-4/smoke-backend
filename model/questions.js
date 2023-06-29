const mongoose = require("mongoose");
const quesSchema = mongoose.Schema({
  question: {
    type: String,
  },
  type: {
    type: String,
  },
  emoji: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Active", "Block"],
  }

});
const quesModel = mongoose.model("question", quesSchema);
module.exports = quesModel;
