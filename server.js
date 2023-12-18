const express = require("express");
const mongoose = require("mongoose");

const app = express();

//routes

app.get("/", (req, res) => {
  res.send("Hello Node API");
});
app.get("/blog", (req, res) => {
  res.send("Hello blog,My name is Stanley");
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
