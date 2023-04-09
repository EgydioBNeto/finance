import express from "express";
import exampleRoutes from "./exampleRoutes.js";

const router = express.Router();

// Routes
router.use("/", exampleRoutes);

export default router;
