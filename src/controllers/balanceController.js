import debit from "../models/Debit.js";
import gain from "../models/Gain.js";

class balanceController {
  static async addGains(req, res) {
    const { description, value, category } = req.body;
    const newGain = new gain({ description, value, category });
    await newGain.save();
    res.send(newGain);
  }

  static async addDebits(req, res) {
    const { description, value, category } = req.body;
    const newDebit = new debit({ description, value, category });
    await newDebit.save();
    res.send(newDebit);
  }

  static async getBalance(req, res) {
    const totalDebits = await debit.find();
    const totalGains = await gain.find();
    const balance = totalGains - totalDebits;
    res.send(balance);
  }

  static async getGains(req, res) {
    const totalGains = await gain.find();
    res.send(totalGains);
  }

  static async getDebits(req, res) {
    const totalDebits = await debit.find();
    res.send(totalDebits);
  }
}

export default balanceController;
