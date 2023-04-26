import { Request, Response, NextFunction } from "express";
import { Role } from "../../types/generated/client/";
import prisma from "../utils/db";

class UserController {
    public async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await prisma.user.findMany();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }
    public async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({
                where: {
                    id: Number(id),
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                },
            });

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
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
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }
    public async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { name, email, role } = req.body;
            const user = await prisma.user.update({
                where: { id: Number(id) },
                data: {
                    name,
                    email,
                    role: role as Role,
                },
            });
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
    public async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = await prisma.user.delete({
                where: { id: Number(id) },
            });
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
    public async getStudents(req: Request, res: Response, next: NextFunction) {
        try {
            const students = await prisma.user.findMany({
                where: { role: Role.STUDENT },
            });
            res.status(200).json(students);
        } catch (error) {
            next(error);
        }
    }
    public async getTeachers(req: Request, res: Response, next: NextFunction) {
        try {
            const teachers = await prisma.user.findMany({
                where: { role: Role.TEACHER },
            });
            res.status(200).json(teachers);
        } catch (error) {
            next(error);
        }
    }
    public async getModules(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const modules = await prisma.user
                .findUnique({
                    where: { id: Number(id) },
                })
                .modules();
            res.status(200).json(modules);
        } catch (error) {
            next(error);
        }
    }
    public async getTeacherModules(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const modules = await prisma.user.findUnique({
                where: { id: Number(id) },
            }).ownedModules();
            res.status(200).json(modules);
        } catch (error) {
            next(error);
        }
    }
    public async getProjects(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const projects = await prisma.user
                .findUnique({
                    where: { id: Number(id) },
                })
                .projects();
            res.status(200).json(projects);
        } catch (error) {
            next(error);
        }
    }
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
            res.status(200).json(projects);
        } catch (error) {
            next(error);
        }
    }
    public async selectProject(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, projectId } = req.params;
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
            const project = await prisma.user.findUnique({
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
            if (project && project?.projects?.length > 0) {
                return res.status(200).json(true);
            } else {
                return res.status(200).json(false);
            }
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
