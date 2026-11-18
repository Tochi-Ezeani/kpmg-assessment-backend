import mongoose, { Schema } from "mongoose";

const inventorySchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    supplier: {
      type: String,
      required: true,
      trim: true,
    },
    SKU: {
      type: String,
      required: true,
      trim: true,
    },
    lowStockStatus: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

export const Inventory = mongoose.model("Inventory", inventorySchema);