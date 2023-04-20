import { Request, Response, NextFunction } from "express";
import prisma from "../utils/client";

// used to define the endpoints
interface ITeachersController {
    getTeachers: (
        req: Request,
        res: Response,
        next: NextFunction
    ) => Promise<void>;
    getTeacher: (
        req: Request,
        res: Response,
        next: NextFunction
    ) => Promise<void>;
    createTeacher: (
        req: Request,
        res: Response,
        next: NextFunction
    ) => Promise<void>;
    updateTeacher: (
        req: Request,
        res: Response,
        next: NextFunction
    ) => Promise<void>;
    deleteTeacher: (
        req: Request,
        res: Response,
        next: NextFunction
    ) => Promise<void>;
}

// path: teachers.ts
class TeachersController implements ITeachersController {
    // basic CRUD operations
    public async getTeachers(req: Request, res: Response, next: NextFunction) {
        try {
            const teachers = await prisma.teacher.findMany();
            res.status(200).json(teachers);
        } catch (error) {
            next(error);
        }
    }
    public async getTeacher(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const teacher = await prisma.teacher.findUnique({
                where: { id: Number(id) },
            });
            res.status(200).json(teacher);
        } catch (error) {
            next(error);
        }
    }
    public async createTeacher(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, email } = req.body;
            const teacher = await prisma.teacher.create({
                data: {
                    name,
                    email,
                },
            });
            res.status(201).json(teacher);
        } catch (error) {
            next(error);
        }
    }
    public async updateTeacher(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            const teacher = await prisma.teacher.update({
                where: { id: Number(id) },
                data: {
                    name,
                    email,
                },
            });
            res.status(200).json(teacher);
        } catch (error) {
            next(error);
        }
    }
    public async deleteTeacher(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const teacher = await prisma.teacher.delete({
                where: { id: Number(id) },
            });
            res.status(200).json(teacher);
        } catch (error) {
            next(error);
        }
    }
}

export default new TeachersController();
