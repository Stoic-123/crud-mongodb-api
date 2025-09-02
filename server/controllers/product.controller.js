const Product = require("../models/product.model");
const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({ result: true, data: product });
  } catch (error) {
    res.status(500).json({ result: false, message: error.message });
  }
};
const getOnlyProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json({ result: true, data: product });
  } catch (error) {
    res.status(500).json({ result: false, message: error.message });
  }
};
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      result: true,
      message: "Product created successfully..",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ result: false, message: error.message });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ result: false, message: "Product not found." });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json({
      result: true,
      message: "Product updated successfully.",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ result: false, message: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ result: false, message: "Product not found." });
    }
    res
      .status(200)
      .json({ result: true, message: "Product deleted successfully." });
  } catch (error) {
    res.status(500).json({ result: false, message: error.message });
  }
};
module.exports = {
  getAllProducts,
  getOnlyProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
