import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import foodRouter from "./routes/FoodRoutes";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const db = process.env.MONGO_URI;

// Set native ES6 Promise as the promise library for Mongoose
mongoose.Promise = global.Promise;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Routes
app.use("/api/foods", foodRouter);

// Database connection using openUri() and specifying useMongoClient
mongoose
  .connect(db, { useMongoClient: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
