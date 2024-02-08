// import product from "../models/product";

import product from "../models/product.js";

const createProduct = async (req, res) => {
  let data = new product(req.body);
  let result = await data.save();
  console.log(result);
  res.send(result);
};

const getProduct = async (req, res) => {
  let data = await product.find();
  res.send(data);
};

const updateProduct = async (req, res) => {
  console.log(req.params);
  let data = await product.updateOne(req.params, {
    $set: req.body,
  });
  res.send(data);
};

const deleteProduct = async (req, res) => {
  console.log(req.params);
  let data = await product.deleteOne(req.params);
  res.send(data);
};

export { createProduct, getProduct, updateProduct, deleteProduct };
