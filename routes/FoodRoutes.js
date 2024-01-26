import express from "express";
import {
  getAllFoods,
  createFood,
  getFoodById,
  updateFood,
  deleteFood,
} from "../controllers/FoodController";

const router = express.Router();

router.route("/").get(getAllFoods).post(createFood);
router.route("/:id").get(getFoodById).put(updateFood).delete(deleteFood);

export default router;
