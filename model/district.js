const mongoose = require("mongoose");

const districtSchema = mongoose.Schema({
  district: {
    type: String
  },
  stateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "state",
  },
});
const districtModel = mongoose.model("district", districtSchema);

module.exports = districtModel;
