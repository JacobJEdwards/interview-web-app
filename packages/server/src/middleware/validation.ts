import schemas from "../utils/schemas";
import type {NextFunction, Request, Response} from "express";

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
export const idParamValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
  value: string
) => {
  try {
    schemas.id.parse(value);
    next();
  } catch (error: unknown) {
    res.status(400).json({ error: error });
  }
};

export const loginValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body = schemas.login.parse(req.body);
    next();
  } catch (error: unknown) {
    res.status(400).json({ error: error });
  }
};
