import { Router } from "express";
import cartController from "../Controllers/cartsController.js";

const router = Router();

router
	.get("/", cartController.getAllCarts)
	.get("/bigcarts", cartController.getBigCarts);

export default router;
