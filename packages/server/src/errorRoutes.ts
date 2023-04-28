import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500).json({ error: err })
}

const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'Not Found' })
}

export default [errorHandler, notFound]
