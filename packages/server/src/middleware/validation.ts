import schemas from "../utils/schemas";
import type { NextFunction, Request, Response } from "express";

// validation middle ware

/* export default (schemaName: string) => {    
    return (req: Request, res: Response, next: NextFunction) => {
    try {
        const  validation = schemas[schemaName].parse(req.body);
            next();
    }
    catch (error: unknown) {
        next(error);
    }
    }
} */

// gets the id from the params and validates it
export const idParamValidation = async (
    req: Request,
    res: Response,
    next: NextFunction,
    value: string
) => {
    try {
        await schemas.id.parseAsync(value);
        next();
    } catch (error: unknown) {
        res.status(400).json({ error: error });
    }
};

export const loginValidation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        req.body = await schemas.login.parseAsync(req.body);
        next();
    } catch (error: unknown) {
        res.status(400).json({ error: error });
    }
};

export const newProjectValidation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        req.body = await schemas.createProject.parseAsync(req.body);
        next();
    } catch (error: unknown) {
        res.status(400).json({ error: error });
    }
};

export const updateProjectValidation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        req.body = await schemas.updateProject.parseAsync(req.body);
        next();
    } catch (error: unknown) {
        res.status(400).json({ error: error });
    }
};
