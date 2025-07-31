import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orders: {
        type: Array,
        default: []
    },
});

const order = mongoose.model("order", orderSchema);

export default order;