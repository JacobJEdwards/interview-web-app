import type { Request, Response, NextFunction } from "express";

/**
 * Wraps an async request handler function and adds proper error handling.
 * Can be used as a class method decorator.
 *
 * @param {function} fn - The async request handler function to wrap.
 * @param _context
 * @returns {function} - The wrapped async request handler function.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function asyncHandler(
    fn: (
        req: Request,
        res: Response,
        next: NextFunction,
        ...args: any[]
    ) => Promise<any>,
    _context?: ClassMethodDecoratorContext
) {
    return async function(
        req: Request,
        res: Response,
        next: NextFunction,
        ...args: any[]
    ): Promise<any> {
        try {
            await fn(req, res, next, ...args);
        } catch (err) {
            next(err);
        }
    };
}
