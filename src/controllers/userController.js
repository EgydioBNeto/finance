import user from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const authConfig = { secret: process.env.FINANCE_JWT_SECRET };

dotenv.config();

class userController {
  static async getUsers(req, res) {
    const users = await user.find();
    res.status(200).json(users);
  }

  static async addUser(req, res) {
    const { login, password } = req.body;
    const existingUser = await user.findOne({ login: login });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error: "Invalid password. Please choose a stronger password.",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await user.create({
      login: login,
      password: passwordHash,
    });

    res.status(201).json(newUser);
  }

  static async deleteUser(req, res) {
    const { id } = req.query;
    const existingUser = await user.findById(id);

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.findByIdAndDelete(id);

    res.status(200).json({ message: "User deleted" });
  }

  static async login(req, res) {
    const { login, password } = req.body;
    const existingUser = await user.findOne({ login: login });

    if (!existingUser) {
      return res.status(401).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    const tokenPayload = { id: existingUser._id, login: existingUser.login };

    const token = jwt.sign(tokenPayload, authConfig.secret);

    return res.status(200).json({ token, user: existingUser._id });
  }
}

export default userController;
