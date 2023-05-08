import express from "express";
import AuthController from "../controllers/auth.controller";
import { loginValidation } from "../middleware/validation";

// /auth route
const router = express.Router();

router.post("/login", loginValidation, AuthController.login);

export default router;
