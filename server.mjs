import dotenv from "dotenv";
dotenv.config();

import express from "express";
import InventoryRoutes from "./src/routes/inventory.routes.mjs";
import SuppliersRoutes from "./src/routes/suppliers.routes.mjs";
import ProductsRoutes from "./src/routes/products.routes.mjs";
import ReportsRoutes from "./src/routes/products.routes.mjs";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

mongoose
  .connect(`${process.env.MONGODB_CONNECTION}`)
  .then(console.log("Connected to database"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/inventory", InventoryRoutes);
app.use("/api/suppliers", SuppliersRoutes);
app.use("/api/products", ProductsRoutes);
app.use("/api/reports", ReportsRoutes);

app.listen(port, () => console.log(`Server is running on: ${port}`));
