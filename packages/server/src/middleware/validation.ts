// Purpose: middleware for validating requests
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

/**
 * Validates the id parameters.
 * calls next() if validation is successful.
 * asyncHandler is used to catch any errors and pass them to the error handler, thrown by the validation library.
 * @param req Request
 * @param res Response
 * @param next NextFunction
 * @param value string - the id parameter
 */
export const idParamValidation = asyncHandler(
  async (req: Request, res: Response, next: NextFunction, value: string) => {
    await schemas.id.parseAsync(value);
    next();
  }
);

/**
 * Validates the body of the on login route.
 * calls next() if validation is successful.
 * asyncHandler is used to catch any errors and pass them to the error handler, thrown by the validation library.
 * @param req Request
 * @param res Response
 * @param next NextFunction
 */
export const loginValidation = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    req.body = await schemas.login.parseAsync(req.body);
    next();
  }
);

/**
 * Validates the body of the on new project route.
 * calls next() if validation is successful.
 * asyncHandler is used to catch any errors and pass them to the error handler, thrown by the validation library.
 * @param req Request
 * @param res Response
 * @param next NextFunction
 */
export const newProjectValidation = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    req.body = await schemas.createProject.parseAsync(req.body);
    next();
  }
);

/**
 * Validates the body of the on update project route.
 * calls next() if validation is successful.
 * asyncHandler is used to catch any errors and pass them to the error handler, thrown by the validation library.
 * @param req Request
 * @param res Response
 * @param next NextFunction
 */
export const updateProjectValidation = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    req.body = await schemas.updateProject.parseAsync(req.body);
    next();
  }
);

/**
 * Validates the query parameters of the get modules route.
 * calls next() if validation is successful.
 * asyncHandler is used to catch any errors and pass them to the error handler, thrown by the validation library.
 * @param req Request
 * @param res Response
 * @param next NextFunction
 */
export const getModulesValidation = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    await schemas.getModules.parseAsync(req.query);
    next();
  }
);

/**
 * Validates the query parameters of the get projects route.
 * calls next() if validation is successful.
 * asyncHandler is used to catch any errors and pass them to the error handler, thrown by the validation library.
 * @param req Request
 * @param res Response
 * @param next NextFunction
 */
export const getProjectsValidation = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        await schemas.getProjects.parseAsync(req.query);
        next();
        }
);
