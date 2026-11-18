import { Router } from "express";
import { getOneInventoryRecord, createInventoryRecord } from "../handlers/inventory.handlers.mjs";

const router = Router();

router.get("/", () => {});

router.get("/:id", getOneInventoryRecord);

router.post("/", createInventoryRecord);

router.patch("/:id", () => {});

router.delete("/:id", () => {});

export default router;
