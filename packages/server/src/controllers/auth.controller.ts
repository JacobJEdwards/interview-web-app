import { NextFunction, Request, Response } from "express";
import { auth } from "../services";
import { asyncHandler } from "../utils";

class AuthController {
  @asyncHandler
  public async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    const { status, response } = await auth.login(email, password);

    if (status === 200) {
      return res.status(status).json(response);
    }

    res.statusCode = status;
    return next(response);
  }
}

export default new AuthController();
