import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

// Get the MongoDB connection string based on the environment
const connectionString = process.env.FINANCE_MONGODB_URI;

// Connect to the MongoDB database
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the database connection object
const db = mongoose.connection;

// Handle errors that may occur during the database connection
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Export the database connection object
export default db;
