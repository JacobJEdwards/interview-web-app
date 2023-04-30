import { Request, Response, NextFunction } from "express";
import primsa from "../utils/db";
import { getProjectsSchema, idSchema, createProjectSchema } from "../schemas";


class ProjectsController {
    // basic CRUD operations

    // get all projects
    public async getProjects(req: Request, res: Response, next: NextFunction) {
        try {
            const teacherId = req.query.teacherId
                ? Number(req.query.teacherId)
                : undefined;

            const name = req.query.name ? String(req.query.name) : undefined;
            const moduleId = req.query.moduleId ? Number(req.query.moduleId) : undefined;

            const validation = getProjectsSchema.safeParse({
                teacherId: teacherId,
                name: name,
                moduleId: moduleId,
            });

            if (!validation.success) {
                res.status(400).json({ message: validation.error });
            }

            const projects = await primsa.project.findMany({
                where: {
                    teacherId: teacherId,
                    name: name,
                    moduleId: moduleId,
                },
            });
            res.status(200).json(projects);
        } catch (err) {
            next(err);
        }
    }

    // get specific project
    public async getProject(req: Request, res: Response, next: NextFunction) {
        try {
            const { projectId } = req.params;

            const project = await primsa.project.findUnique({
                where: {
                    id: Number(projectId),
                },
            });

            if (!project) {
                res.status(404).json({ message: "Project not found" });
            }
            res.status(200).json(project);
        } catch (err) {
            next(err);
        }
    }

    // create new project
    public async createProject(req: Request, res: Response, next: NextFunction) {
        try {
            const validation = createProjectSchema.safeParse(req.body);

            if (!validation.success) {
                res.status(400).json({ message: validation.error });
            }

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

    // update project
    public async updateProject(req: Request, res: Response, next: NextFunction) {
        try {
            const project = await primsa.project.update({
                where: {
                    id: Number(req.params.projectiId),
                },
                data: {
                    name: req.body.name,
                    description: req.body.description,
                },
            });

            if (!project) {
                res.status(404).json({ message: "Project not found" });
            }

            res.status(200).json(project);
        } catch (err) {
            next(err);
        }
    }

    // delete project
    public async deleteProject(req: Request, res: Response, next: NextFunction) {
        try {
            const { projectId } = req.params;

            const validation = idSchema.safeParse(projectId);

            if (!validation.success) {
                res.status(400).json({ message: validation.error });
            }

            const project = await primsa.project.delete({
                where: {
                    id: Number(req.params.projectId),
                },
            });
            res.status(200).json(project);
        } catch (err) {
            next(err);
        }
    }
}

export default new ProjectsController();
