import app from "./src/app.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const port = process.env.PORT || 3000;

// Function that starts the server
const startServer = async () => {
  try {
    await app.listen(port);
    console.log(`Server listening on http://localhost:${port}`);
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

// Start the server
startServer();
