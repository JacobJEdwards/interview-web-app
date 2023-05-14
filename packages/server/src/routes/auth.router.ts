// Purpose: Handles all routes for /auth
import express from "express";
import { AuthController } from "../controllers";
import { validators } from "../middleware";

// create router instance
const router = express.Router();

// login route - contains validation middleware
router.post("/login", validators.loginValidation, AuthController.login);

export default router;
