const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "paid", "Failed"],
      default: "Pending",
    },
    paymentId: {
      type: String,
    },
    orderId: {
      type: String,
    },
    receipt: {
      type: String,
    },
    orderStatus: {
      type: String,
      enum: ["Processing", "Shipping", "delivered", "Cancelled"],
      default: "Processing",
    },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
