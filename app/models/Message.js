import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
 content: String,
 date: { type: Date, required: true, unique: true },
});

messageSchema.statics.getTodaysMessage = function () {
 const today = new Date();
 today.setHours(0, 0, 0, 0); // Set time to start of the day

 return this.findOne({ date: today }).exec(); 
};

const Message = mongoose.model('Message', messageSchema);

export default Message;