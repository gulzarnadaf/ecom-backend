const express = require("express");
const {
  getCart,
  addToCart,
  upadateQuantity,
  removeProduct,
  clearCart,
} = require("../controllers/cartControllers");
const { isAuth } = require("../middlewares/authMiddlewares");
const cartRoutes = express.Router();
cartRoutes.get("/", isAuth, getCart);
cartRoutes.post("/add", isAuth, addToCart);
cartRoutes.put("/", isAuth, upadateQuantity);
cartRoutes.delete("/remove", isAuth, removeProduct);
cartRoutes.delete("/clear", isAuth, clearCart);

module.exports = cartRoutes;
