/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import db from "../utils/db";
import {
    getModuleSchema,
    createModuleSchema,
    updateModuleSchema,
    createProjectSchema,
    idSchema,
} from "../utils/schemas";
import asyncHandler from "../utils/asyncHandler";

class ModulesController {
    // basic CRUD operations

    // get all modules
    @asyncHandler
    public async getModules(req: Request, res: Response, _next: NextFunction) {
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

        const modules = await db.module.findMany({
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
    }

    // get specific module
    @asyncHandler
    public async getModule(req: Request, res: Response, _next: NextFunction) {
        const { moduleId } = req.params;

        const module = await db.module.findUnique({
            where: {
                id: Number(moduleId),
            },
        });

        if (!module) {
            return res.status(404).json({ message: "Module not found" });
        }

        return res.status(200).json(module);
    }

    // create module
    @asyncHandler
    public async createModule(req: Request, res: Response, _next: NextFunction) {
        const validation = createModuleSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({ message: validation.error });
        }

        const module = await db.module.create({
            data: {
                name: req.body.name,
                description: req.body.description,
                teacherId: Number(req.body.teacherId),
            },
        });

        return res.status(201).json(module);
    }

    // update module
    @asyncHandler
    public async updateModule(req: Request, res: Response, _next: NextFunction) {
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

        const module = await db.module.update({
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
    }

    // delete module
    @asyncHandler
    public async deleteModule(req: Request, res: Response, _next: NextFunction) {
        const { moduleId } = req.params;

        const validation = idSchema.safeParse(moduleId);

        if (!validation.success) {
            return res.status(400).json({ message: validation.error });
        }

        const module = await db.module.delete({
            where: {
                id: Number(moduleId),
            },
        });

        return res.status(200).json(module);
    }

    // get a module's projects
    @asyncHandler
    public async getProjects(req: Request, res: Response, _next: NextFunction) {
        const { moduleId } = req.params;

        const validation = idSchema.safeParse(moduleId);

        if (!validation.success) {
            return res.status(400).json({ message: validation.error });
        }

        const projects = await db.project.findMany({
            where: {
                moduleId: Number(moduleId),
            },
        });

        if (!projects || projects.length === 0) {
            return res.status(404).json({ message: "No projects found" });
        }

        return res.status(200).json(projects);
    }

    // create and connect project to module
    @asyncHandler
    public async createProject(req: Request, res: Response, _next: NextFunction) {
        const filePath = req.file ? req.file.path : undefined;

        //const validation = createProjectSchema.safeParse(req.body);

        // if (!validation.success) {
        //   return res.status(400).json({ message: validation.error });
        // }

        const project = await db.project.create({
            data: {
                name: req.body.name as string,
                description: req.body.description as string,
                moduleId: Number(req.params.moduleId),
                filePath,
                dateSet: new Date(),
                dateDue: new Date(req.body.dateDue as string),
            },
        });

        return res.status(201).json(project);
    }
}

export default new ModulesController();
