import { Request, Response, NextFunction } from "express";
import primsa from "../client";

class ProjectsController {
  public async getProjects(req: Request, res: Response, next: NextFunction) {
    try {
      const projects = await primsa.project.findMany();
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json("Internal server error");
    }
  }
  public async getProjectsByModule(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const projects = await primsa.project.findMany({
        where: {
          moduleId: req.params.Id,
        },
      });
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json("Internal server error");
    }
  }

  public async getProject(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await primsa.project.findUnique({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(project);
    } catch (err) {
      res.status(500).json("Internal server error");
    }
  }

  public async createProject(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await primsa.project.create({
        data: {
          name: req.body.name,
          description: req.body.description,
        },
      });
      res.status(201).json(project);
    } catch (err) {
      res.status(500).json("Internal server error");
    }
  }

  public async updateProject(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await primsa.project.update({
        where: {
          id: req.params.id,
        },
        data: {
          name: req.body.name,
          description: req.body.description,
        },
      });
      res.status(200).json(project);
    } catch (err) {
      res.status(500).json("Internal server error");
    }
  }

  public async deleteProject(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await primsa.project.delete({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(project);
    } catch (err) {
      res.status(500).json("Internal server error");
    }
  }
}

export default new ProjectsController();
