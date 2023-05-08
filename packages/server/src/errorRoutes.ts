import type {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
  RequestHandler,
} from "express";

const errorHandler: ErrorRequestHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const statusCode = err instanceof Error ? 500 : 400;

  res.status(statusCode).json({ error: err });
};

const notFound: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({ message: "Endpoint does not exist" });
};

export default [errorHandler, notFound];
