import mongoose from "mongoose";

const debitSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  date: { type: Date },
  description: { type: String },
  type: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

const debit = mongoose.model("debit", debitSchema);

export default debit;
