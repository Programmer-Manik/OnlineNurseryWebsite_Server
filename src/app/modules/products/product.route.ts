import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/create-product", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProduct);
router.get("/:productId", ProductControllers.getSingleProduct);
router.patch("/:productId", ProductControllers.updateProduct);
router.delete("/:productId", ProductControllers.deleteProduct);

export default router;
