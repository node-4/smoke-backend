const mongoose = require("mongoose");
const quesSchema = mongoose.Schema({
  question: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Active", "Block"],
  }

});
const quesModel = mongoose.model("question", quesSchema);
module.exports = quesModel;
