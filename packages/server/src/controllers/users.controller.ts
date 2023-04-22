import { Request, Response, NextFunction } from "express";
import { Role } from "../../types/generated/client/";
import prisma from "../utils/db";

class UserController {
  public async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await prisma.user.findMany();
      return users;
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
      console.log(user);
      return user;
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
      return user;
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
      return user;
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
      return user;
    } catch (error) {
      next(error);
    }
  }
  public async getStudents(req: Request, res: Response, next: NextFunction) {
    try {
      const students = await prisma.user.findMany({
        where: { role: Role.STUDENT },
      });
      return students;
    } catch (error) {
      next(error);
    }
  }
  public async getTeachers(req: Request, res: Response, next: NextFunction) {
    try {
      const teachers = await prisma.user.findMany({
        where: { role: Role.TEACHER },
      });
      return teachers;
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
      return modules;
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
      return projects;
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
