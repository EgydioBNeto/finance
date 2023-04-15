import express from "express";
import balanceController from "../controllers/balanceController.js";
import userController from "../controllers/userController.js";
import extractController from "../controllers/extractController.js";

const router = express.Router();

router
  .post("/login", userController.login)
  .get("/balance", balanceController.getBalance)
  .get("/gain", balanceController.getGains)
  .get("/debit", balanceController.getDebits)
  .post("/gain", balanceController.addGains)
  .post("/debit", balanceController.addDebits)
  .get("/user", userController.getUsers)
  .post("/user", userController.addUser)
  .get("/extract", extractController.getExtract);

export default router;
