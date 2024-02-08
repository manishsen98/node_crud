import express from "express";
const router = express.Router();
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controller/productController.js";

router.route("/add").post(createProduct);
router.route("/get").get(getProduct);
router.route("/patch/:_id").patch(updateProduct);
router.route("/delete/:_id").delete(deleteProduct);
export default router;
