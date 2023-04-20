import { Request, Response, NextFunction } from 'express';
import prisma from '../client';

class TeachersController {
    public async getTeachers(req: Request, res: Response, next: NextFunction) {
        try {
            const teachers = await prisma.teacher.findMany();
            res.status(200).json(teachers);
        } catch (error) {
            next(error);
        }
    }

}
