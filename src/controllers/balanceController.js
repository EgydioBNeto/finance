import debit from "../models/Debit.js";
import gain from "../models/Gain.js";

class balanceController {
  static async addGains(req, res) {
    const { description, value, category } = req.body;
    const newGain = new gain({ description, value, category });
    await newGain.save();
    res.status(201).json(newGain);
  }

  static async addDebits(req, res) {
    const { description, value, category } = req.body;
    const newDebit = new debit({ description, value, category });
    await newDebit.save();
    res.status(201).json(newDebit);
  }

  static async getBalance(req, res) {
    const totalDebits = await debit.find();
    const totalGains = await gain.find();
    const balance = totalGains - totalDebits;
    res.status(200).json(balance);
  }

  static async getGains(req, res) {
    const totalGains = await gain.find();
    res.status(200).json(totalGains);
  }

  static async getDebits(req, res) {
    const totalDebits = await debit.find();
    res.status(200).json(totalDebits);
  }
}

export default balanceController;
