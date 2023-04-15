import user from "../models/User.js";
import bcrypt from "bcrypt";

class userController {
  static async getUsers(req, res) {
    const users = await user.find();
    res.status(200).json(users);
  }

  static async addUser(req, res) {
    const { login, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await user.create({
      login: login,
      password: passwordHash,
    });
    res.status(201).json(newUser);
  }

  static async login(req, res) {
    const { login, password } = req.body;
    const existingUser = await user.findOne({ login: login });

    if (!existingUser) {
      // user not found
      return res.status(401).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) {
      // incorrect password
      return res.status(401).json({ error: "Incorrect password" });
    }

    // successful login
    return res.status(200).json({ message: "Login successful" });
  }
}

export default userController;
