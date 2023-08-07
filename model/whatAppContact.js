const mongoose = require("mongoose");
const whatAppSchema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  phone: {
    type: String,
  },
  userContacts: [{
    phone: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    appId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userProfile",
    },
    onApp: {
      type: Boolean,
      default: false,
    },
  }],
});

const quesModel = mongoose.model("whatAppContact", whatAppSchema);
module.exports = quesModel;