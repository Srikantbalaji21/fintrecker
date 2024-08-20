import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true }, // income or expense
  date: { type: Date, default: Date.now },
  category: { type: String, required: true },
});

export default mongoose.model('Transaction', transactionSchema);
