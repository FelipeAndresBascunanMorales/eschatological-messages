import mongoose from 'mongoose';

const archiveSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  archivedAt: {
    type: Date,
    default: Date.now
  }
});

const Archive = mongoose.model('Archive', archiveSchema);

export default Archive;