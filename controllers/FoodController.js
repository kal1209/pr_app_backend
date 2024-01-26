import {
  getAllFoodsService,
  createFoodService,
  getFoodByIdService,
  updateFoodService,
  deleteFoodService,
} from "../services/FoodService";

export const getAllFoods = async (req, res) => {
  try {
    const foods = await getAllFoodsService();
    res.json({ data: foods, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createFood = async (req, res) => {
  try {
    const food = await createFoodService(req.body);
    res.json({ data: food, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getFoodById = async (req, res) => {
  try {
    const food = await getFoodByIdService(req.params.id);
    res.json({ data: food, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateFood = async (req, res) => {
  try {
    const food = await updateFoodService(req.params.id, req.body);
    res.json({ data: food, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteFood = async (req, res) => {
  try {
    const food = await deleteFoodService(req.params.id);
    res.json({ data: food, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
