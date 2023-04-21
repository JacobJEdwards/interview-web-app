import { Request, Response, NextFunction } from "express";
import prisma from "../utils/db";

class AuthController {
  public async studentLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await prisma.student.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      if (user.password !== password) {
        return res.status(401).json({ message: "Incorrect password" });
      }
      return res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      next(error);
    }
  }
  public async teacherLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await prisma.teacher.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      if (user.password !== password) {
        return res.status(401).json({ message: "Incorrect password" });
      }
      return res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      next(error);
    }
  }
}
