import express from "express";
import balanceController from "../controllers/balanceController.js";

const router = express.Router();

router
  .get("/balance", balanceController.getBalance)
  .get("/gain", balanceController.getGains)
  .get("/debit", balanceController.getDebits);

export default router;
