import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// MONGO_URL = mongodb://127.0.0.1:27017

export const dbconnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/gr5_Aryan_Kumar`);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(" MongoDB connection failed:", error.message);
  }
};