import mongoose from "mongoose";

const balanceSchema = new mongoose.Schema({
  value: { type: Number, required: true },
});

const balance = mongoose.model("balance", balanceSchema);

export default balance;
