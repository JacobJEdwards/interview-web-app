import { NextFunction, Request, Response } from "express";
import { auth } from "../services";
import { asyncHandler } from "../utils";

/**
 * Class used to handle all the auth related routes
 * @class AuthController
 *
 * @method login
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 * @returns {Promise<Response | void>} - Express response object
 * @static
 * @async
 * @public
 */
class AuthController {
    @asyncHandler
    public async login(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> {
        const { email, password } = req.body;

        // Call the login method from the auth service
        const { status, response } = await auth.login(email, password);

        if (status === 200) {
            return res.status(status).json(response);
        }

        // If the status is not 200, then call the error handler
        res.statusCode = status;
        return next(response);
    }
}

export default new AuthController();
