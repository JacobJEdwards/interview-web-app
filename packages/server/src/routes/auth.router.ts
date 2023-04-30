import express from "express";
import AuthController from "../controllers/auth.controller";
import { loginValidation } from "../validation";

// /auth route
const router = express.Router();

router.post("/login", loginValidation, AuthController.login);
// router.post("/logout", AuthController.logout);

export default router;
