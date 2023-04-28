import express, { Request, Response, NextFunction } from 'express';
import Cors from 'cors';
import Morgan from 'morgan';
import Helmet from 'helmet';
import * as dotenv from 'dotenv';

dotenv.config();


const middleware = [
    express.json(),
    express.urlencoded({ extended: true }),
    Cors(),
    Morgan('dev'),
    Helmet(),
]



export default middleware;


