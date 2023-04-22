import express from "express";
const router = express.Router();

import AuthController from "../controllers/auth.controller";

router.post("/login", AuthController.login);
//router.post("/studentLogin", AuthController.studentLogin);
//router.post("/teacherLogin", AuthController.teacherLogin);

export default router;
