import user from "../models/User.js";

class userController {
  static async getUsers(req, res) {
    const users = await user.find();
    res.status(200).json(users);
  }

  static async addUser(req, res) {
    const { login, password } = req.body;
    const newUser = await user.create({ login, password });
    res.status(201).json(newUser);
  }
}

export default userController;
