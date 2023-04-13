import debit from "../models/Debit.js";
import gain from "../models/Gain.js";

class balanceController {
  // Add a new gain
  static async addGains(req, res) {
    try {
      const { value, description } = req.body;

      const newGain = new gain({ value, description, date: new Date() });
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
      const { value, description } = req.body;
      
      const newDebit = new debit({ value, description, date: new Date() });
      await newDebit.save();

      // Return the newly created debit with a 201 Created status code
      res.status(201).json(newDebit);
    } catch (err) {
      // Handle any errors with a 500 Internal Server Error status code
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  }

  // Get the current balance of the account
  static async getBalance(req, res) {
    try {
      const [totalDebits, totalGains] = await Promise.all([
        debit.aggregate([{ $group: { _id: null, total: { $sum: "$value" } } }]),
        gain.aggregate([{ $group: { _id: null, total: { $sum: "$value" } } }]),
      ]);

      const balance = {
        totalDebits: totalDebits[0]?.total || 0,
        totalGains: totalGains[0]?.total || 0,
        balance: (totalGains[0]?.total || 0) - (totalDebits[0]?.total || 0),
      };

      // Return the balance object with a 200 OK status code
      res.status(200).json(balance);
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
}


export default balanceController;
