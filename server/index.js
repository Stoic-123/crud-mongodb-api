const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ProductRouter = require("./routes/product.route");
dotenv.config();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello express");
});
app.use(ProductRouter);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected!");
    app.listen("3000", () => {
      console.log("http://localhost:3000");
    });
  })
  .catch(() => {
    console.log("Conection failed..!");
  });
