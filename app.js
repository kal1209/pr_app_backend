import express from "express";
import dotenv from "dotenv";
dotenv.config();
const DBConnect = require("./helpers/databaseConnection");

import foodRoutes from "./routes/FoodRoutes";
import bodyParser from "body-parser";

const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());
DBConnect();

// Routes
app.use("/api/foods", foodRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
