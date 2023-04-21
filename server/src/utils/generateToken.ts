import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import type { Student, Teacher } from "@prisma/client";

dotenv.config();

const generateToken = (user: Student | Teacher) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.SECRET_KEY as string,
    { expiresIn: "1h" }
  );
  return token;
};

export default generateToken;
