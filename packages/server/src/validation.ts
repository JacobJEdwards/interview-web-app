import schemas from "./schemas";
import type { Request, Response, NextFunction } from "express";

// validation middle ware

/* export default (schemaName: string) => {    
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schemas[schemaName].validate(req.body);
        const valid = error == null;
        if (valid) {
            next();
        } else {
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
    const validation = await schemas.id.parseAsync(value);
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
    const validation = await schemas.login.parseAsync(req.body);
    req.body = validation;
    next();
  } catch (error: unknown) {
    res.status(400).json({ error: error });
  }
};
