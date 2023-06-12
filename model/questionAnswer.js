// const mongoose = require("mongoose");

// const quesSchema = mongoose.Schema({
//   userID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "userProfile",
//   },
//   question: {
//     type: String,
//     default: "",
//     required: true,
//   },
//   questionCount:{
//     type:Number,
//     default:0
//   },
//   option_1: {
//     option: {
//       type: String,
//       default: "",//userProfile
//     },
//     userID: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "userProfile",
//     },
//   },

//   option_2: {
//     type: String,
//     default: "",
//   },
//   option_3: {
//     type: String,
//     default: "",
//   },
//   option_4: {
//     type: String,
//     default: "",
//   },

//   selectedBy: [
//     {
//       userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "userProfile",
//       },
//       optionChoose: {
//         type: String,
//         default: "",
//       },
//     },
//   ],

//   option_1Count: {
//     type: Number,
//     default: 0,
//   },
//   option_2Count: {
//     type: Number,
//     default: 0,
//   },
//   option_3Count: {
//     type: Number,
//     default: 0,
//   },
//   option_4Count: {
//     type: Number,
//     default: 0,
//   },
// });

// const quesModel = mongoose.model("questionAnswer", quesSchema);

// module.exports = quesModel;

const mongoose = require("mongoose");

const quesSchema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  question: {
    type: String,
    default: "",
    required: true,
  },
  questionCount: {
    type: Number,
    default: 0,
  },
  option_1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  option_2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  option_3: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },
  option_4: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
  },

  selectedBy: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userProfile",
      },
      optionChoose: {
        type: String,
        enum:["option_1","option_2","option_3","option_4"],
        default: "option_1",
      },
    },
  ],

  option_1Count: {
    type: Number,
    default: 0,
  },
  option_2Count: {
    type: Number,
    default: 0,
  },
  option_3Count: {
    type: Number,
    default: 0,
  },
  option_4Count: {
    type: Number,
    default: 0,
  },
});

const quesModel = mongoose.model("questionAnswer", quesSchema);

module.exports = quesModel;
