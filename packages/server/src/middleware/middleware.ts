import express from "express";
import Cors from "cors";
import Morgan from "morgan";
import Helmet from "helmet";
import * as dotenv from "dotenv";
import { storage } from "../utils/multer";
import multer from "multer";
import compression from "compression";

dotenv.config();

const middleware = [
  compression(),
  express.json(),
  express.urlencoded({ extended: true }),
  multer({ storage: storage }).single("file"),
  express.static("uploads"),
  Cors(),
  Morgan("dev"),
  Helmet(),
];

export default middleware;
