import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  price: Number,
  itemName: String
});

const item = mongoose.model("item", itemSchema);

export default item;