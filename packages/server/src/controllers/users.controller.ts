import { Request, Response, NextFunction } from "express";
import { Role } from "../../types/generated/client/";
import prisma from "../utils/db";
import { idSchema } from "../schemas";

class UserController {
  // get all users
  public async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const role = req.query.role ? (req.query.role as Role) : undefined;
      const email = req.query.email ? String(req.query.email) : undefined;
      const name = req.query.name ? String(req.query.name) : undefined;

      const users = await prisma.user.findMany({
        where: { role, email, name },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      });

      if (!users || users.length === 0) {
        return res.status(404).json({ message: "Users not found" });
      }

      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  // get user by id (no password)
  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const user = await prisma.user.findUnique({
        where: {
          id: Number(userId),
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  // create user
  public async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, role, password } = req.body;
      const user = await prisma.user.create({
        data: {
          name,
          email,
          role: role as Role,
          password,
        },
      });

      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  // update user
  public async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, role } = req.body;
      const user = await prisma.user.update({
        where: { id: Number(req.params.userId) },
        data: {
          name,
          email,
          role: role as Role,
        },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  // delete user
  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await prisma.user.delete({
        where: { id: Number(req.params.userId) },
      });

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  // get a users modules
  public async getModules(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const validation = idSchema.safeParse(userId);

      if (!validation.success) {
        return res.status(400).json({ message: validation.error });
      }

      const modules = await prisma.user
        .findUnique({
          where: { id: Number(req.params.userId) },
        })
        .modules();

      if (!modules || modules.length === 0) {
        return res.status(404).json({ message: "Modules not found" });
      }

      res.status(200).json(modules);
    } catch (error) {
      next(error);
    }
  }

  // get a users projects
  public async getProjects(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const validation = idSchema.safeParse(userId);

      if (!validation.success) {
        return res.status(400).json({ message: validation.error });
      }

      const projects = await prisma.user
        .findUnique({
          where: { id: Number(req.params.userId) },
        })
        .projects();

      if (!projects || projects.length === 0) {
        return res.status(404).json({ message: "Projects not found" });
      }

      res.status(200).json(projects);
    } catch (error) {
      next(error);
    }
  }

  // get a students selected projects for a module
  public async getStudentModuleProjects(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { userId, moduleId } = req.params;
      const projects = await prisma.user
        .findUnique({
          where: { id: Number(userId) },
        })
        .projects({
          where: {
            module: {
              id: Number(moduleId),
            },
          },
        });

      if (!projects || projects.length === 0) {
        return res.status(404).json({ message: "Projects not found" });
      }

      res.status(200).json(projects);
    } catch (error) {
      next(error);
    }
  }

  // select a project for a module
  public async selectProject(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, projectId, moduleId } = req.params;
      const previousProject = await prisma.user.findUnique({
        where: {
          id: Number(userId),
        },
        select: {
          projects: {
            where: {
              module: {
                id: Number(moduleId),
              },
            },
          },
        },
      });

      if (previousProject && previousProject?.projects?.length > 0) {
        const previousProjectId = previousProject.projects[0].id;
        await prisma.user.update({
          where: {
            id: Number(userId),
          },
          data: {
            projects: {
              disconnect: {
                id: Number(previousProjectId),
              },
            },
          },
        });
      }

      const project = await prisma.user.update({
        where: {
          id: Number(userId),
        },
        data: {
          projects: {
            connect: {
              id: Number(projectId),
            },
          },
        },
      });

      res.status(200).json(project);
    } catch (error) {
      next(error);
    }
  }
  public async isProjectSelected(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { userId, projectId } = req.params;
      const user = await prisma.user.findUnique({
        where: {
          id: Number(userId),
        },
        select: {
          projects: {
            where: {
              id: Number(projectId),
            },
          },
        },
      });
      if (user && user?.projects?.length > 0) {
        return res.status(200).json(true);
      } else {
        return res.status(200).json(false);
      }
    } catch (error) {
      next(error);
    }
  }
  public async getSelectedProject(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { userId, moduleId } = req.params;
      const user = await prisma.user.findUnique({
        where: {
          id: Number(userId),
        },
        select: {
          projects: {
            where: {
              module: {
                id: Number(moduleId),
              },
            },
          },
        },
      });

      if (!user || user?.projects?.length === 0) {
        return res.status(404).json({ message: "Project not found" });
      }

      res.status(200).json(user.projects);
    } catch (error) {
      next(error);
    }
  }

  // public async assignProjectToUser(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ) {
  //   try {
  //     const { userId, projectId } = req.params;
  //     const project = await prisma.user.upsert({
  //       where: {
  //         id: Number(userId),
  //       },
  //       connect: {
  //         projects: {
  //           id: Number(projectId),
  //         },
  //       },
  //     });
  //     res.status(200).json(project);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
}

export default new UserController();
