import { Inventory } from "../models/inventory.model.mjs";

export const getOneInventoryRecord = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Inventory.findById(id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const createInventoryRecord = async (req, res) => {
  try {
    const { productName, supplier, SKU, lowStockStatus } = req.body;

    if (!productName || supplier || !SKU || !lowStockStatus) {
      res.status(400).json({ message: "All fields must be provided" });
    }

    await Inventory.create({ productName, supplier, SKU, lowStockStatus });
    res.status(201).json({ message: "Inventory record created" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
