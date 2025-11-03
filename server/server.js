
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";
import educatorRouter from "./routes/educatorRoute.js";
import {clerkMiddleware}    from "@clerk/express"

import connectCloudanary from "./configs/cloudanary.js";
import courseRouter from "./routes/courseRoute.js";
import userRouter from "./routes/userRoute.js";

// Initialize Express
const app = express();

// Connect to the MongoDB database
await connectDB();
await connectCloudanary();
// Middlewares
app.use(cors());
app.use(clerkMiddleware());
app.get('/', (req, res) => {
  res.send("API Working");
});

app.post("/clerk", bodyParser.raw({ type: "application/json" }), clerkWebhooks);
app.use('/api/educator',express.json(),educatorRouter);
app.use('/api/course',express.json(),courseRouter);
app.use('/api/user',express.json(),userRouter);

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
