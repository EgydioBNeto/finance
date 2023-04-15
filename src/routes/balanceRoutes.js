import express from "express";
import balanceController from "../controllers/balanceController.js";
import userController from "../controllers/userController.js";

const router = express.Router();

router
  .get("/balance", balanceController.getBalance)
  .get("/gain", balanceController.getGains)
  .get("/debit", balanceController.getDebits)
  .post("/gain", balanceController.addGains)
  .post("/debit", balanceController.addDebits)
  .get("/user", userController.getUsers)
  .post("/user", userController.addUser)
  .post("/login", userController.login);

export default router;
