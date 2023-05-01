import { Request, Response, NextFunction } from "express";
import primsa from "../utils/db";
import { getProjectsSchema, createProjectSchema } from "../schemas";

class ProjectsController {
    // basic CRUD operations

    // get all projects
    public async getProjects(req: Request, res: Response, next: NextFunction) {
        try {
            const teacherId = req.query.teacherId
                ? Number(req.query.teacherId)
                : undefined;

            const name = req.query.name ? String(req.query.name) : undefined;
            const moduleId = req.query.moduleId
                ? Number(req.query.moduleId)
                : undefined;

            const validation = getProjectsSchema.safeParse({
                teacherId,
                name,
                moduleId,
            });

            if (!validation.success) {
                return res.status(400).json({ message: validation.error });
            }

            const projects = await primsa.project.findMany({
                where: {
                    teacherId,
                    name,
                    moduleId,
                },
            });
            return res.status(200).json(projects);
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
                return res.status(404).json({ message: "Project not found" });
            }

            return res.status(200).json(project);
        } catch (err) {
            next(err);
        }
    }

    // create new project
    public async createProject(req: Request, res: Response, next: NextFunction) {
        try {
            const validation = createProjectSchema.safeParse(req.body);

            if (!validation.success) {
                return res.status(400).json({ message: validation.error });
            }

            const project = await primsa.project.create({
                data: {
                    name: req.body.name,
                    description: req.body.description,
                    teacherId: Number(req.body.teacherId),
                    moduleId: Number(req.body.moduleId),
                },
            });
            return res.status(201).json(project);
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
                return res.status(404).json({ message: "Project not found" });
            }

            return res.status(200).json(project);
        } catch (err) {
            next(err);
        }
    }

    // delete project
    public async deleteProject(req: Request, res: Response, next: NextFunction) {
        try {
            const { projectId } = req.params;

            const project = await primsa.project.delete({
                where: {
                    id: Number(projectId),
                },
            });
            return res.status(200).json(project);
        } catch (err) {
            next(err);
        }
    }
}

export default new ProjectsController();
