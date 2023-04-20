import { Request, Response, NextFunction } from "express";
import prisma from "../utils/client";

// used to define the endpoints
interface IStudentsController {
  getStudents: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  getStudent: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  createStudent: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  updateStudent: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  deleteStudent: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
}

// path: students.ts
class StudentController implements IStudentsController {
  // basic CRUD operations
  public async getStudents(req: Request, res: Response, next: NextFunction) {
    try {
      const students = await prisma.student.findMany();
      res.status(200).json(students);
    } catch (err) {
      next(err);
    }
  }

  public async getStudent(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const student = await prisma.student.findUnique({
        where: { id: Number(id) },
      });
      res.status(200).json(student);
    } catch (err) {
      next(err);
    }
  }

  public async createStudent(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email } = req.body;
      const student = await prisma.student.create({
        data: { name, email },
      });
      res.status(201).json(student);
    } catch (err) {
      next(err);
    }
  }

  public async updateStudent(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const student = await prisma.student.update({
        where: { id: Number(id) },
        data: { name, email },
      });
      res.status(200).json(student);
    } catch (err) {
      next(err);
    }
  }

  public async deleteStudent(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const student = await prisma.student.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(student);
    } catch (err) {
      next(err);
    }
  }
}

export default new StudentController();
