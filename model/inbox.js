const mongoose = require('mongoose');

const inboxSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userProfile',
    required: true,
  },
  flameUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userProfile',
    required: true,
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'questionAnswer',
  },
  view: {
    type: Boolean,
    default: false,
  },
  hide: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Inbox = mongoose.model('inbox', inboxSchema);

module.exports = Inbox;
