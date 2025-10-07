
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";


// Initialize Express
const app = express();

// Connect to the MongoDB database
await connectDB();

// Middlewares
app.use(cors());



// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
