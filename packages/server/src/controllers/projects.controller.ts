import { Request, Response, NextFunction } from "express";
import prisma from "../utils/db";
import { getProjectsSchema, createProjectSchema } from "../utils/schemas";
import path from "path";
import asyncHandler from "../utils/asyncHandler";

class ProjectsController {
  // basic CRUD operations

  // get all projects
  @asyncHandler
  public async getProjects(req: Request, res: Response, next: NextFunction) {
    const name = String(req.query.name) ?? undefined;
    const moduleId = Number(req.query.moduleId) ?? undefined;

    const validation = getProjectsSchema.safeParse({
      name,
      moduleId,
    });

    if (!validation.success) {
      return res.status(400).json({ message: validation.error });
    }

    const projects = await prisma.project.findMany({
      where: {
        moduleId,
        name,
      },
    });
    return res.status(200).json(projects);
  }

  // get specific project
  @asyncHandler
  public async getProject(req: Request, res: Response, next: NextFunction) {
    const { projectId } = req.params;

    const project = await prisma.project.findUnique({
      where: {
        id: Number(projectId),
      },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    return res.status(200).json(project);
  }

  // create new project
  @asyncHandler
  public async createProject(req: Request, res: Response, next: NextFunction) {
    const validation = createProjectSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({ message: validation.error });
    }

    const project = await prisma.project.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        moduleId: Number(req.body.moduleId),
      },
    });
    return res.status(201).json(project);
  }

  // update project
  @asyncHandler
  public async updateProject(req: Request, res: Response, next: NextFunction) {
    const { name, description } = req.body;
    const filePath = req.file?.path ?? undefined;
    const project = await prisma.project.update({
      where: {
        id: Number(req.params.projectId),
      },
      data: {
        name,
        description,
        filePath,
      },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    return res.status(200).json(project);
  }

  // delete project
  @asyncHandler
  public async deleteProject(req: Request, res: Response, next: NextFunction) {
    const { projectId } = req.params;

    const project = await prisma.project.delete({
      where: {
        id: Number(projectId),
      },
    });
    return res.status(200).json(project);
  }

  // download project file
  @asyncHandler
  public async downloadFile(req: Request, res: Response, next: NextFunction) {
    const { projectId } = req.params;

    const project = await prisma.project.findUnique({
      where: {
        id: Number(projectId),
      },
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (!project.filePath) {
      return res.status(404).json({ message: "File not found" });
    }

    return res.sendFile(project.filePath, {
      root: path.join(__dirname, "../../"),
    });
  }
}

export default new ProjectsController();
