import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";

// Import routes
import Routes from "./routes/index.js";

const app = express();

// Middleware
app.use(morgan("dev")); // logging
app.use(bodyParser.json()); // parse JSON
app.use(helmet()); // set security-related HTTP headers
app.use(cors()); // enable Cross-Origin Resource Sharing

// Routes
app.use("/", Routes);

export default app;
