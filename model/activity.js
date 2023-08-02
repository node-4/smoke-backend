const mongoose = require('mongoose');
const schema = mongoose.Schema;
const DocumentSchema = schema({
        userId: {
                type: schema.Types.ObjectId,
                ref: "userProfile"
        },
        otherUserId: {
                type: schema.Types.ObjectId,
                ref: "userProfile"
        },
        inboxId: {
                type: schema.Types.ObjectId,
                ref: "inbox"
        },
        description: {
                type: String,
        },
        hide: {
                type: Boolean,
                default: false,
        },
        logType: {
                type: String,
        },
}, { timestamps: true })
module.exports = mongoose.model("log", DocumentSchema);