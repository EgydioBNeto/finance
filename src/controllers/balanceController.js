import debit from "../models/Debit.js";
import gain from "../models/Gain.js";
import User from "../models/User.js";

class balanceController {
  // Add a new gain
  static async addGains(req, res) {
    try {
      const { value, description, user } = req.body;

      const existingUser = await User.findById(user);
      if (!existingUser) {
        return res.status(404).json({ error: "User not found" });
      }
      const newGain = new gain({
        value,
        description,
        date: new Date(),
        user,
        type: "Gain",
      });
      await newGain.save();

      // Return the newly created gain with a 201 Created status code
      res.status(201).json(newGain);
    } catch (err) {
      // Handle any errors with a 500 Internal Server Error status code
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  }

  // Add a new debit
  static async addDebits(req, res) {
    try {
      const { value, description, user } = req.body;
      const existingUser = await User.findById(user);
      if (!existingUser) {
        return res.status(404).json({ error: "User not found" });
      }
      const newDebit = new debit({
        value,
        description,
        user,
        date: new Date(),
        type: "Debit",
      });
      await newDebit.save();

      // Return the newly created debit with a 201 Created status code
      res.status(201).json(newDebit);
    } catch (err) {
      // Handle any errors with a 500 Internal Server Error status code
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  }

  // Get all registered gains
  static async getGains(req, res) {
    try {
      const gains = await gain.find();

      // Return the gains with a 200 OK status code
      res.status(200).json(gains);
    } catch (err) {
      // Handle any errors with a 500 Internal Server Error status code
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  }

  // Get all registered debits
  static async getDebits(req, res) {
    try {
      const debits = await debit.find();

      // Return the debits with a 200 OK status code
      res.status(200).json(debits);
    } catch (err) {
      // Handle any errors with a 500 Internal Server Error status code
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  }

  static async getBalance(req, res) {
    try {
      const { user } = req.query;

      // Find the user
      const existingUser = await User.findById(user);
      if (!existingUser) {
        return res.status(404).json({ error: "User not found" });
      }

      // Get all the gains and debits for the user
      const userGains = await gain.find({ user: user });
      const userDebits = await debit.find({ user: user });

      // Calculate the total balance
      const totalGains = userGains.reduce((acc, curr) => acc + curr.value, 0);
      const totalDebits = userDebits.reduce((acc, curr) => acc + curr.value, 0);
      const balance = totalGains - totalDebits;

      // Return the balance with a 200 OK status code
      res.status(200).json({ balance });
    } catch (err) {
      // Handle any errors with a 500 Internal Server Error status code
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  }
}

export default balanceController;
