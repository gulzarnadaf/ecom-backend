const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const cartRoutes = require("./routes/cartRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    name: "gulzar nadaf",
    regno: "U15QH24S0005",
    clg: "kle bca snk",
  });
});

app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(" MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("mongoDB connected error", err);
  });
