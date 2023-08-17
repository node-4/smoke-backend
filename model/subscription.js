const mongoose = require("mongoose");
const subscriptionSchema = mongoose.Schema({
        name: {
                type: String,
                enum: ["Monthly", "Week"]
        },
        price: {
                type: Number
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
        }
}, { timestamps: true });
module.exports = mongoose.model("subscription", subscriptionSchema);