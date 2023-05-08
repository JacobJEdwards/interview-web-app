import { Request, Response, NextFunction } from "express";
import prisma from "../utils/db";
import generateToken from "../utils/generateToken";
import asyncHandler from "../utils/asyncHandler";

import bcrypt from "bcryptjs";

class AuthController {
  @asyncHandler
  public async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);

    res.status(200).json({ message: "Login successful", token, user });
  }
}

export default new AuthController();
