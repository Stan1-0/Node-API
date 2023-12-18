const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productmodels");
const app = express();

app.use(express.json);

//routes

app.get("/", (req, res) => {
  res.send("Hello Node API");
});
app.get("/blog", (req, res) => {
  res.send("Hello blog,My name is Stanley");
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ mesage: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://stankofb:StAvenue@cluster0.cef6sjr.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Mongodb connected successfully!");
    app.listen(3000, () => {
      console.log("Node API  app is running on port 300");
    });
  })
  .catch((error) => {
    console.log(error);
  });
