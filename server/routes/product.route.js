const express = require("express");
const {
  getAllProducts,
  getOnlyProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const router = express.Router();
router.get("/api/products", getAllProducts);
router.get("/api/product/:id", getOnlyProduct);
router.post("/api/products", createProduct);
router.put("/api/product/:id", updateProduct);
router.delete("/api/product/:id", deleteProduct);
module.exports = router;
