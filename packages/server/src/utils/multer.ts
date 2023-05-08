import type { Request } from "express";
import multer, { FileFilterCallback } from "multer";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FilenameCallback = (error: Error | null, filename: string) => void;

export const storage = multer.diskStorage({
    destination: (
        req: Request,
        file: Express.Multer.File,
        cb: DestinationCallback
    ): void => {
        cb(null, "uploads/");
    },
    filename: (
        req: Request,
        file: Express.Multer.File,
        cb: FilenameCallback
    ): void => {
        cb(null, file.originalname);
    },
});

export const fileFilter = (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
): void => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type"));
    }
};
