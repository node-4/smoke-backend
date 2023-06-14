const mongoose = require("mongoose");

const subscriptionSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  subscriptionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subscription",
  },
  firstLetter: {
    type: String,
    default: "Unlimited"
  },
  crushAlert: {
    type: Boolean,
    default: false
  },
  fullName: {
    type: Number,
  },
  perWeek: {
    type: Number
  },
  totalWeek: {
    type: Number
  },
  anonymousMode: {
    type: Boolean,
    default: false
  },
  doublecoins: {
    type: Boolean,
    default: false
  },
  subscriptionStatus: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("userSubscription", subscriptionSchema);
