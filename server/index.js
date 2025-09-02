const express = require("express");
const mongoose = require("mongoose");
const ProductRouter = require("./routes/product.route");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello express");
});
app.use(ProductRouter);
mongoose
  .connect(
    "mongodb+srv://zealong292_db_user:n1gxDYMO7kveEeux@backenddb.jz2bv00.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected!");
    app.listen("3000", () => {
      console.log("http://localhost:3000");
    });
  })
  .catch(() => {
    console.log("Conection failed..!");
  });
