import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
});

const user = mongoose.model("user", userSchema);

export default user;
