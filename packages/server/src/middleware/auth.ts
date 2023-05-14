// Purpose: Authentication middleware
// Type: Middleware
// Desc: Middleware to validate token in request header (if present) and add user info to request object (not yet implemented)
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import { schemas, StatusCodes } from "../utils";

dotenv.config();

/**
 * Middleware to validate token in request header (if present) and add user info to request object (not yet implemented)
 *
 * @param req Request object
 * @param res Response object
 * @param next Next function
 * @returns Response object with error if token is invalid or missing
 * @returns Next function if token is valid
 * @returns Request object with user info if token is valid (not yet implemented)
 */
const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    // get token from header
    // I chose not to add the word 'Bearer' to the token in the header, so the token is just the token string
    const token = req.headers.authorization;

    // check if token is present
    if (!token) {
      throw new Error("No token provided");
    }

    // decode token
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string);

    // if decoded token is not present, throw error
    if (!decoded) {
      throw new Error("Invalid token");
    }

    // validate token with Zod
    // this is an object with the user info
    const validToken = schemas.token.parse(decoded);

    // will give the req object user info for use in future from token (? could be useful -> would have to extend Request interface and change type of routes)
    // req.user = {
    //     id: validToken.id,
    //     email: validToken.email,
    //     name: validToken.name,
    //     role: validToken.role,
    // };

    // call next function
    next();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid token";
    return res.status(StatusCodes.UNAUTHORIZED).json({
      error: message,
    });
  }
};

export default validateToken;
