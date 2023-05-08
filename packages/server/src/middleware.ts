import express, { Request, Response, NextFunction } from "express";
import Cors from "cors";
import Morgan from "morgan";
import Helmet from "helmet";
import * as dotenv from "dotenv";
import { storage } from "./utils/multer";
import multer from "multer";

dotenv.config();

const middleware = [
    express.json(),
    express.urlencoded({ extended: true }),
    multer({ storage: storage }).single("file"),
    express.static("uploads"),
    Cors(),
    Morgan("dev"),
    Helmet(),
];

export default middleware;
