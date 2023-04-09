import mongoose from "mongoose";

const gainSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
});

const gain = mongoose.model("gain", gainSchema);

export default gain;
