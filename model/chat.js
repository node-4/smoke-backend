const mongoose = require('mongoose');
const schema = mongoose.Schema;
const chatSchema = new schema({
        user1: {
                type: mongoose.Schema.ObjectId,
                ref: 'userProfile'
        },
        userName1: {
                type: String
        },
        user2: {
                type: mongoose.Schema.ObjectId,
                ref: 'userProfile'
        },
        userName2: {
                type: String
        },
        deleteChat1: {
                type: Boolean,
                default: false
        },
        deleteChat2: {
                type: Boolean,
                default: false
        },
        messageDetail: [{
                sender: {
                        type: String
                },
                userName: {
                        type: String
                },
                Type: {
                        type: String,
                        enum: ["TEXT", "AUDIO", "VIDEO", "DOCS", "IMAGES"],
                        default: "TEXT"
                },
                message: {
                        type: String
                },
                video: {
                        type: String
                },
                image: {
                        type: String
                },
                docs: {
                        type: String
                },
                audio: {
                        type: String
                },
                time: {
                        type: Date,
                        default: Date.now(),
                },
                messageClear1: {
                        type: Boolean,
                        default: false
                },
                messageClear2: {
                        type: Boolean,
                        default: false
                },
                messageStatus: {
                        type: String,
                        enum: ["Read", "Unread"],
                        default: "Unread"
                },
        }],
        status: {
                type: String,
                enum: ["ACTIVE", "BLOCK", "DELETE"],
                default: "ACTIVE"
        }
}, {
        timestamps: true
})
module.exports = mongoose.model("chat", chatSchema)
