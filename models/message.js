const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
    enum: ['red', 'blue', 'green', 'yellow'], // Example set of colors
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Message', messageSchema);