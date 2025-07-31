import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  order: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "item",
    }],
});

const users = mongoose.model("customer", customerSchema);

export default users;