import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
  {
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    chatId: { type: mongoose.Schema.Types.ObjectId, required: true }, 
    content: { type: String, required: true },
    chatType: { type: String, enum: ["DM", "GROUP"], required: true },
    status: { type: String, enum: ["sent", "delivered", "seen"], default: "sent" }
  },
  { timestamps: true }
);

export default mongoose.model('Message', messageSchema);