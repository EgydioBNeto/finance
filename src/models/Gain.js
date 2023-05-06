import mongoose from "mongoose";

const gainSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  date: { type: Date },
  description: { type: String },
  type: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

const gain = mongoose.model("gain", gainSchema);

export default gain;
