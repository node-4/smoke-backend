const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  city: {
    type: String
  },
  districtId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "district",
  },
  stateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "state",
  },
}, { timestamps: true });
const cityModel = mongoose.model("city", citySchema);

module.exports = cityModel;
