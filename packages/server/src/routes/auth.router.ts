import express from "express";
import { AuthController } from "../controllers";
import { validators } from "../middleware";

// /auth route
const router = express.Router();

router.post("/login", validators.loginValidation, AuthController.login);

export default router;
