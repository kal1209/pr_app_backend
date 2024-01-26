import express from "express";
import {
  getAllFoods,
  createFood,
  getFoodById,
  updateFood,
  deleteFood,
} from "../controllers/FoodController";

const router = express.Router();

router.get("/", getAllFoods);
router.post("/", createFood);
router.get("/:id", getFoodById);
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);

export default router;
