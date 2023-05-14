import type {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
  RequestHandler,
} from "express";
import { StatusCodes } from "../utils";

const errorHandler: ErrorRequestHandler = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log(err);

  const statusCode = err instanceof Error ? StatusCodes.BAD_REQUEST : StatusCodes.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json({ error: err });
};

const notFound: RequestHandler = (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(StatusCodes.NOT_FOUND).json({ message: "Endpoint does not exist" });
};

export default [errorHandler, notFound];
