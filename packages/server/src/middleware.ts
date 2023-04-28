import express, { Request, Response, NextFunction } from 'express';
import Cors from 'cors';
import Morgan from 'morgan';
import Helmet from 'helmet';
import * as dotenv from 'dotenv';

dotenv.config();

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500).json({ error: err })
}

const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'Not Found' })
}

const middleware = [
    express.json(),
    express.urlencoded({ extended: true }),
    Cors(),
    Morgan('dev'),
    Helmet(),
    errorHandler,
    notFound
]



export default middleware;


