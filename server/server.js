import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

// middleware
import notFoundMiddleware from "./middleware/not-found.js";

import productRoutes from "./routes/productRoutes.js";

app.use("/api/v1/product", productRoutes);
app.use(notFoundMiddleware);
const PORT = process.env.PORT || 5000;

// DB connect
import connectDB from "./db/connect.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`server is starting http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
