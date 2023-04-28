import express from "express";
import AuthController from "../controllers/auth.controller";

// /auth route
const router = express.Router();

router.post("/login", AuthController.login);
// router.post("/logout", AuthController.logout);

export default router;
