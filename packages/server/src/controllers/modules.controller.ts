import { Request, Response, NextFunction } from "express";
import prisma from "../utils/db";

// used to define the endpoints
interface IModuleController {
  getModules: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  getModule: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  createModule: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  updateModule: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  deleteModule: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  getProjects: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
}

// path: modules.ts
class ModulesController implements IModuleController {
  // basic CRUD operations
  public async getModules(req: Request, res: Response, next: NextFunction) {
    try {
      const modules = await prisma.module.findMany();
      res.status(200).json(modules);
    } catch (err) {
      next(err);
    }
  }
  public async getModule(req: Request, res: Response, next: NextFunction) {
    try {
      const module = await prisma.module.findUnique({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(200).json(module);
    } catch (err) {
      next(err);
    }
  }
  public async createModule(req: Request, res: Response, next: NextFunction) {
    try {
      const module = await prisma.module.create({
        data: {
          name: req.body.name,
          teacherId: Number(req.body.teacherId),
        },
      });
      res.status(201).json(module);
    } catch (err) {
      next(err);
    }
  }
  public async updateModule(req: Request, res: Response, next: NextFunction) {
    try {
      const module = await prisma.module.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          name: req.body.name,
        },
      });
      res.status(200).json(module);
    } catch (err) {
      next(err);
    }
  }
  public async deleteModule(req: Request, res: Response, next: NextFunction) {
    try {
      const module = await prisma.module.delete({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(200).json(module);
    } catch (err) {
      next(err);
    }
  }
  public async getProjects(req: Request, res: Response, next: NextFunction) {
    try {
      const projects = await prisma.project.findMany({
        where: {
          moduleId: Number(req.params.id),
        },
      });
      res.status(200).json(projects);
    } catch (err) {
      next(err);
    }
  }
}

export default new ModulesController();
