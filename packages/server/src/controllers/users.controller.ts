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
                where: { id: Number(id) },
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
}

export default new UserController();
