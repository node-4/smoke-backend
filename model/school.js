const mongoose = require("mongoose");
const schoolSchema = mongoose.Schema({
        schoolName: {
                type: String,
        },
        districtId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "district",
        },
        stateId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "state",
        },
        city: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "city",
        },
        pinCode: {
                type: String,
        },
        studentCount: {
                type: Number,
                default: 0
        },
        User: {
                type: Array,
                ref: "userProfile",
              },
        status: {
                type: String,
                enum: ["Approved", "Reject", "Pending"],
        }
});
const schoolModel = mongoose.model("school", schoolSchema);
module.exports = schoolModel;
