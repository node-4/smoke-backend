const mongoose = require("mongoose");

const stateSchema = mongoose.Schema({
  state: {
    type: String
  },
}, { timestamps: true });
const cityModel = mongoose.model("state", stateSchema);
module.exports = cityModel;
