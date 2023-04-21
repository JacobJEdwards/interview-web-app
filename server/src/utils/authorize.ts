import { Request, Response, NextFunction } from "express";

const authorize = (role: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.user && req.user.role === role) {
            next();
        } else {
            res.status(403).send("Forbidden");
        }
    };
};

export default authorize;
