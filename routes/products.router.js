import { Router } from "express";
import productController from "../Controllers/productController.js";

const router = Router();

router
	.get("/", productController.getAllProducts)
	.get("/prices", productController.getProductsByPrice)
	.get("/categories", productController.getProductsAndCategories)
	.get("/expensive", productController.getMostExpensiveProducts)
	.get("/category/:category", productController.getProductsByCategory)
	.get("/:id", productController.getProductsById);

export default router;
