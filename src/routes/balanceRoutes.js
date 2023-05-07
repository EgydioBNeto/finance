import express from "express";
import balanceController from "../controllers/balanceController.js";
import userController from "../controllers/userController.js";
import extractController from "../controllers/extractController.js";
import authConfigs from "../middleware/auth.js";

const router = express.Router();

router
  .post("/login", userController.login)
  .get("/balance", authConfigs, balanceController.getBalance)
  .get("/gain", authConfigs, balanceController.getGains)
  .get("/debit", authConfigs, balanceController.getDebits)
  .post("/gain", authConfigs, balanceController.addGains)
  .post("/debit", authConfigs, balanceController.addDebits)
  .delete("/gain", authConfigs, balanceController.deleteGains)
  .delete("/debit", authConfigs, balanceController.deleteDebits)
  .get("/user", authConfigs, userController.getUsers)
  .post("/user", userController.addUser)
  .get("/extract", authConfigs, extractController.getExtract)
  .delete("/user", userController.deleteUser);

export default router;
