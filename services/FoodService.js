import FoodModel from "../models/Food";

export const getAllFoodsService = async () => {
  return await FoodModel.find();
};

export const createFoodService = async (food) => {
  return await FoodModel.create(food);
};

export const getFoodByIdService = async (id) => {
  return await FoodModel.findById(id);
};

export const updateFoodService = async (id, food) => {
  return await FoodModel.findByIdAndUpdate(id, food);
};

export const deleteFoodService = async (id) => {
  return await FoodModel.findByIdAndDelete(id);
};
