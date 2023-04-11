import mongoose from "mongoose";

const debitSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  // date: { type: Date, required: true },
  // description: { type: String, required: true },
});

const debit = mongoose.model("debit", debitSchema);

export default debit;
