import type { Request, Response, NextFunction } from "express";

/**
 * Wraps an async request handler function and adds proper error handling.
 *
 * @param {function} fn - The async request handler function to wrap.
 * @param _context
 * @returns {function} - The wrapped async request handler function.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>,
  _context?: ClassMethodDecoratorContext
) {
  return async function (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}
