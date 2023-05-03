import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";

dotenv.config();

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            status: 401,
            error: "Unauthorized",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY as string);

        if (!decoded) {
            return res.status(401).json({
                status: 401,
                error: "Invalid token",
            });
        }

        //req.user = decoded;
        // will give the req object user info for use in future from token (? could be useful -> would have to extend Request interface and change type of routes)

        next();
    } catch (error) {
        return res.status(401).json({
            status: 401,
            error: "Invalid token",
        });
    }
};

export default validateToken;
