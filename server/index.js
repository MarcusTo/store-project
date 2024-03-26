const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.routes.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect(
    "mongodb+srv://admin:o8uKkApIVMUxek1v@cluster007.hcbcpka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster007"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });