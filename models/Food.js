import mongoose from "mongoose";

const { Schema } = mongoose;

const foodSchema = new Schema({
  title: String,
  body: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Food = mongoose.model("Food", foodSchema);

export default Food;
