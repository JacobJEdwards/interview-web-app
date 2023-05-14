// Purpose: Multer configuration for file upload
import type { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import { v4 } from "uuid";

// Callback types
type DestinationCallback = (error: Error | null, destination: string) => void;
type FilenameCallback = (error: Error | null, filename: string) => void;

// Multer configuration for storage
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
    // Generate a random filename using uuid
    cb(null, v4());
  },
});

// Multer configuration for file filter
export const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
): void => {
  // Accept file if it is a jpeg or png
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    // Reject file if it is not a valid file type
    cb(new Error("Invalid file type"));
  }
};
