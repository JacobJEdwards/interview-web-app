import { schemas, asyncHandler } from "../utils";
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
export const idParamValidation = asyncHandler(
  async (req: Request, res: Response, next: NextFunction, value: string) => {
    await schemas.id.parseAsync(value);
    next();
  }
);

export const loginValidation = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    req.body = await schemas.login.parseAsync(req.body);
    next();
  }
);

export const newProjectValidation = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    req.body = await schemas.createProject.parseAsync(req.body);
    next();
  }
);

export const updateProjectValidation = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    req.body = await schemas.updateProject.parseAsync(req.body);
    next();
  }
);
