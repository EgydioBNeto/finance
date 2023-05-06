import debit from "../models/Debit.js";
import gain from "../models/Gain.js";

class extractController {
  static async getExtract(req, res) {
      const userId = req.query.user;
      try {
        // Get all debits and gains for the user and sort by date
        const allDebits = await debit.find({ user: userId });
        const allGains = await gain.find({ user: userId });
        const extract = allDebits
          .concat(allGains)
          .sort((a, b) => a.date - b.date);

        // Send the response with the calculated amounts and sorted transactions
        res.status(200).json({
          extract,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      }
  }
}

export default extractController;
