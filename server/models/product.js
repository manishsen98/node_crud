import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  Price: Number,
  brand: String,
  category: String,
});

export default mongoose.model("users", productSchema);
