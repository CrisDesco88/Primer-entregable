import { Router } from "express";
import usersController from "../Controllers/usersController.js";

const router = Router();

router
	.get("/", usersController.getAllUsers)
	.get("/first", usersController.getFirstThreeUsers);

export default router;
