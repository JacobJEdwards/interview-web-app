import { Request, Response, NextFunction } from "express";
import primsa from "../utils/client";

// used to define the endpoints
interface IProjectController {
  getProjects: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  getProject: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  createProject: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  updateProject: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  deleteProject: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
}

// Path: projects.ts
class ProjectsController implements IProjectController {
  // basic CRUD operations
  public async getProjects(req: Request, res: Response, next: NextFunction) {
    try {
      const projects = await primsa.project.findMany();
      res.status(200).json(projects);
    } catch (err) {
      next(err);
    }
  }
  public async getProject(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await primsa.project.findUnique({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(200).json(project);
    } catch (err) {
      next(err);
    }
  }

  public async createProject(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await primsa.project.create({
        data: {
          name: req.body.name,
          description: req.body.description,
          teacherId: Number(req.body.teacherId),
          moduleId: Number(req.body.moduleId),
        },
      });
      res.status(201).json(project);
    } catch (err) {
      next(err);
    }
  }

  public async updateProject(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await primsa.project.update({
        where: {
          id: Number(req.params.id),
        },
        data: {
          name: req.body.name,
          description: req.body.description,
        },
      });
      res.status(200).json(project);
    } catch (err) {
      next(err);
    }
  }

  public async deleteProject(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await primsa.project.delete({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(200).json(project);
    } catch (err) {
      next(err);
    }
  }
}

export default new ProjectsController();
