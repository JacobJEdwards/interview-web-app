import { Request, Response, NextFunction } from "express";
import prisma from "../utils/db";
import {
  getModuleSchema,
  createModuleSchema,
  updateModuleSchema,
  createProjectSchema,
  idSchema,
} from "../schemas";

class ModulesController {
  // basic CRUD operations

  // get all modules
  public async getModules(req: Request, res: Response, next: NextFunction) {
    try {
      const teacherId = req.query.teacherId
        ? Number(req.query.teacherId)
        : undefined;
      const name = req.query.name ? String(req.query.name) : undefined;

      const validation = getModuleSchema.safeParse({
        name,
        teacherId,
      });

      if (!validation.success) {
        return res.status(400).json({ message: validation.error });
      }

      const modules = await prisma.module.findMany({
        where: {
          teacherId,
          name: {
            contains: name,
          },
        },
      });

      if (!modules || modules.length === 0) {
        return res.status(404).json({ message: "No modules found" });
      }

      return res.status(200).json(modules);
    } catch (err) {
      next(err);
    }
  }

  // get specific module
  public async getModule(req: Request, res: Response, next: NextFunction) {
    try {
      const { moduleId } = req.params;

      const module = await prisma.module.findUnique({
        where: {
          id: Number(moduleId),
        },
      });

      if (!module) {
        return res.status(404).json({ message: "Module not found" });
      }

      return res.status(200).json(module);
    } catch (err) {
      next(err);
    }
  }

  // create module
  public async createModule(req: Request, res: Response, next: NextFunction) {
    try {
      const validation = createModuleSchema.safeParse(req.body);

      if (!validation.success) {
        return res.status(400).json({ message: validation.error });
      }

      const module = await prisma.module.create({
        data: {
          name: req.body.name,
          description: req.body.description,
          teacherId: Number(req.body.teacherId),
        },
      });

      return res.status(201).json(module);
    } catch (err) {
      next(err);
    }
  }

  // update module
  public async updateModule(req: Request, res: Response, next: NextFunction) {
    try {
      const { moduleId } = req.params;
      const validation = updateModuleSchema.safeParse({
        name: req.body.name,
        moduleId: moduleId,
        description: req.body.description,
        teacherId: req.body.teacherId,
      });

      if (!validation.success) {
        return res.status(400).json({ message: validation.error });
      }

      const module = await prisma.module.update({
        where: {
          id: Number(moduleId),
        },
        data: {
          name: req.body.name,
          description: req.body.description,
          teacherId: Number(req.body.teacherId),
        },
      });

      if (!module) {
        return res.status(404).json({ message: "Module not found" });
      }

      return res.status(200).json(module);
    } catch (err) {
      next(err);
    }
  }

  // delete module
  public async deleteModule(req: Request, res: Response, next: NextFunction) {
    try {
      const { moduleId } = req.params;

      const validation = idSchema.safeParse(moduleId);

      if (!validation.success) {
        return res.status(400).json({ message: validation.error });
      }

      const module = await prisma.module.delete({
        where: {
          id: Number(moduleId),
        },
      });

      return res.status(200).json(module);
    } catch (err) {
      next(err);
    }
  }

  // get a module's projects
  public async getProjects(req: Request, res: Response, next: NextFunction) {
    try {
      const { moduleId } = req.params;

      const validation = idSchema.safeParse(moduleId);

      if (!validation.success) {
        return res.status(400).json({ message: validation.error });
      }

      const projects = await prisma.project.findMany({
        where: {
          moduleId: Number(moduleId),
        },
      });

      if (!projects || projects.length === 0) {
        return res.status(404).json({ message: "No projects found" });
      }

      return res.status(200).json(projects);
    } catch (err) {
      next(err);
    }
  }

  // create and connect project to module
  public async createProject(req: Request, res: Response, next: NextFunction) {
    try {
      const validation = createProjectSchema.safeParse(req.body);

      if (!validation.success) {
        return res.status(400).json({ message: validation.error });
      }

      const project = await prisma.project.create({
        data: {
          name: req.body.name as string,
          description: req.body.description as string,

          teacher: {
            connect: {
              id: Number(req.body.teacherId),
            },
          },

          module: {
            connect: {
              id: Number(req.params.moduleId),
            },
          },
        },
      });

      return res.status(201).json(project);
    } catch (err) {
      next(err);
    }
  }
}

export default new ModulesController();
