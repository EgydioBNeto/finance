import mongoose from "mongoose";

const gainSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  date: { type: Date },
  description: { type: String },
});

const gain = mongoose.model("gain", gainSchema);

export default gain;
