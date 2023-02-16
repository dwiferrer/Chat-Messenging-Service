const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const messagesSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      default: () => uuidv4(),
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Messages', messagesSchema);
