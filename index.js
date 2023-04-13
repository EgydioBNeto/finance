import app from "./src/app.js";
import dotenv from "dotenv";

export default function handler(request, response) {
  const { name } = request.query;
  return response.end(`Hello ${name}!`);
}

// Load environment variables
dotenv.config();

const port = process.env.FINANCE_API_PORT;

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
