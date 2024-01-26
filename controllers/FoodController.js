import FoodModel from "../models/Food";
import { GenerateError } from "../helpers/errors";

export const getAllFoods = async (req, res) => {
  try {
    const foods = await FoodModel.find();
    res.json({ data: foods, status: "success" });
  } catch (err) {
    GenerateError(res, err);
  }
};

export const createFood = async (req, res) => {
  try {
    const food = await FoodModel.create(req.body);
    res.json({ data: food, status: "success" });
  } catch (err) {
    GenerateError(res, err);
  }
};

export const getFoodById = async (req, res) => {
  try {
    const food = await FoodModel.findById(req.params.id);
    res.json({ data: food, status: "success" });
  } catch (err) {
    GenerateError(res, err);
  }
};

export const updateFood = async (req, res) => {
  try {
    const food = await FoodModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(food);
    res.json({ data: food, status: "success" });
  } catch (err) {
    GenerateError(res, err);
  }
};

export const deleteFood = async (req, res) => {
  try {
    const food = await FoodModel.findByIdAndRemove(req.params.id);
    res.json({ data: food, status: "success" });
  } catch (err) {
    GenerateError(res, err);
  }
};
