import { Request, Response, NextFunction } from "express";
import prisma from "../utils/db";

interface IAdminController {
    getAdmins: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAdmin: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createAdmin: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateAdmin: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteAdmin: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

class AdminController implements IAdminController {
  async getAdmins(req: Request, res: Response, next: NextFunction) {
    try {
      const admins = await prisma.admin.findMany();
      res.status(200).json(admins);
    } catch (error) {
      next(error);
    }
  }
  async getAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const admin = await prisma.admin.findUnique({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(200).json(admin);
    } catch (error) {
      next(error);
    }
  }
  async createAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const admin = await prisma.admin.create({
        data: {
          ...req.body,
        },
      });
      res.status(201).json(admin);
    } catch (error) {
      next(error);
    }
  }
  async updateAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const admin = await prisma.admin.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(admin);
    } catch (error) {
      next(error);
    }
  }
  async deleteAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const admin = await prisma.admin.delete({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(200).json(admin);
    } catch (error) {
      next(error);
    }
  }
}
