import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

// Product Schema
const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    image: { type: String, required: true },
    status: {
      type: String,
      enum: ["OUT-OF-STOCK", "IN-STOCK"],
      default: "IN-STOCK",
    },
  },
  { versionKey: false }
);

export const Product = model<TProduct>("Product", productSchema);
