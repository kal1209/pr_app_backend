import mongoose from "mongoose";

const { Schema } = mongoose;

const foodSchema = new Schema({
  name: {
    type: String,
    required: [true, "name field required"],
  },
  inventory_number: {
    type: String,
    required: [true, "inventory number field required"],
  },
  date_entered: {
    type: Date,
    required: [true, "Date Entered field required"],
  },
  storage_location: {
    type: String,
    required: [true, "Storage Location field required"],
  },
  expiration_date: {
    type: Date,
    required: [true, "Expiration Date field required"],
  },
  pounds: {
    type: Number,
    required: [true, "Pounds field required"],
  },
  ounces: {
    type: Number,
    required: [true, "Ounces field required"],
  },
  information: {
    type: Number,
    required: [false],
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Food = mongoose.model("Food", foodSchema);

export default Food;
