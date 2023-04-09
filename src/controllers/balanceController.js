import debit from "../models/Debit.js";
import gain from "../models/Gain";

class balanceController {
  addGain(req, res) {
    const { value, date, description } = req.body;
    const newGain = new gain({ value, date, description });
    newGain.save();
    res.status(201).send(newGain);
  }

  addDebit(req, res) {
    const { value, date, description } = req.body;
    const newDebit = new debit({ value, date, description });
    newDebit.save();
    res.status(201).send(newDebit);
  }

  getBalance(req, res) {
    const balance = gain.value - debit.value;
    res.status(200).send(balance);
  }

  getGains(req, res) {
    const gains = gain.find();
    res.status(200).send(gains);
  }

  getDebits(req, res) {
    const debits = debit.find();
    res.status(200).send(debits);
  }

  deleteGain(req, res) {
    const id = req.params.id;
    const gainToDelete = gain.findByIdAndDelete(id);
    res.status(200).send(gainToDelete);
  }

  deleteDebit(req, res) {
    const id = req.params.id;
    const debitToDelete = debit.findByIdAndDelete(id);
    res.status(200).send(debitToDelete);
  }

  updateGain(req, res) {
    const id = req.params.id;
    const { value, date, description } = req.body;
    const gainToUpdate = gain.findByIdAndUpdate(id, {
      value,
      date,
      description,
    });
    res.status(200).send(gainToUpdate);
  }

  updateDebit(req, res) {
    const id = req.params.id;
    const { value, date, description } = req.body;
    const debitToUpdate = debit.findByIdAndUpdate(id, {
      value,
      date,
      description,
    });
    res.status(200).send(debitToUpdate);
  }
}

export default balanceController;
