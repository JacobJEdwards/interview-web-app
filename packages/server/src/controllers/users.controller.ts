import { NextFunction, Request, Response } from "express";
import { Role } from "../../types/generated/client/";
import prisma from "../utils/db";
import { asyncHandler } from "../utils";

class UserController {
    // get all users
    @asyncHandler
    public async getUsers(req: Request, res: Response, next: NextFunction) {
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
    }

    // get user by id (no password)
    @asyncHandler
    public async getUser(req: Request, res: Response, next: NextFunction) {
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
    }

    // create user
    @asyncHandler
    public async createUser(req: Request, res: Response, next: NextFunction) {
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
    }

    // update user
    @asyncHandler
    public async updateUser(req: Request, res: Response, next: NextFunction) {
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
    }

    // delete user
    @asyncHandler
    public async deleteUser(req: Request, res: Response, next: NextFunction) {
        const user = await prisma.user.delete({
            where: { id: Number(req.params.userId) },
        });

        res.status(200).json(user);
    }

    // get a users modules
    @asyncHandler
    public async getModules(req: Request, res: Response, next: NextFunction) {

        const modules = await prisma.user
            .findUnique({
                where: { id: Number(req.params.userId) },
            })
            .modules();

        if (!modules || modules.length === 0) {
            return res.status(404).json({ message: "Modules not found" });
        }

        res.status(200).json(modules);
    }

    // get a users projects
    @asyncHandler
    public async getProjects(req: Request, res: Response, next: NextFunction) {
        const { userId } = req.params;

        const projects = await prisma.user
            .findUnique({
                where: { id: Number(req.params.userId) },
            })
            .studentProjects();

        if (!projects || projects.length === 0) {
            return res.status(404).json({ message: "Projects not found" });
        }

        res.status(200).json(projects);
    }

    // get a students selected projects for a module
    @asyncHandler
    public async getStudentModuleProjects(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { userId, moduleId } = req.params;
        const projects = await prisma.user
            .findUnique({
                where: { id: Number(userId) },
            })
            .studentProjects({
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
    }

    // select a project for a module
    @asyncHandler
    public async selectProject(req: Request, res: Response, next: NextFunction) {
        const { userId, projectId, moduleId } = req.params;
        const previousProject = await prisma.user.findUnique({
            where: {
                id: Number(userId),
            },
            select: {
                studentProjects: {
                    where: {
                        module: {
                            id: Number(moduleId),
                        },
                    },
                },
            },
        });

        if (previousProject && previousProject?.studentProjects?.length > 0) {
            const previousProjectId = previousProject.studentProjects[0].id;
            await prisma.user.update({
                where: {
                    id: Number(userId),
                },
                data: {
                    studentProjects: {
                        disconnect: {
                            id: Number(previousProjectId),
                        },
                    },
                },
            });
        }

        const project = await prisma.project.findUnique({
            where: {
                id: Number(projectId),
            },
        });

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        const selectProject = await prisma.user.update({
            where: {
                id: Number(userId),
            },
            data: {
                studentProjects: {
                    connect: {
                        id: Number(projectId),
                    },
                },
            },
        });

        res.status(200).json(selectProject);
    }

    @asyncHandler
    public async isProjectSelected(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { userId, projectId } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                id: Number(userId),
            },
            select: {
                studentProjects: {
                    where: {
                        id: Number(projectId),
                    },
                },
            },
        });
        if (user && user?.studentProjects?.length > 0) {
            return res.status(200).json(true);
        } else {
            return res.status(200).json(false);
        }
    }

    @asyncHandler
    public async getSelectedProject(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { userId, moduleId } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                id: Number(userId),
            },
            select: {
                studentProjects: {
                    where: {
                        module: {
                            id: Number(moduleId),
                        },
                    },
                },
            },
        });

        if (!user || user?.studentProjects?.length === 0) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(user.studentProjects[0]);
    }

    @asyncHandler
    public async unselectProject(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { userId, projectId } = req.params;
        const project = await prisma.user.update({
            where: {
                id: Number(userId),
            },
            data: {
                studentProjects: {
                    disconnect: {
                        id: Number(projectId),
                    },
                },
            },
        });

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(project);
    }
}

export default new UserController();
