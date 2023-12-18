const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    Image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, //creates createdAt and updatedAt fields
  }
);

const Product = mongoose.model("Product", produCtSchema);

module.exports = Product;
