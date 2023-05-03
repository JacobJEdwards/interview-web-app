import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import type { User } from "../../types/generated/client";

dotenv.config();

const generateToken = (user: User) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.SECRET_KEY as string,
    { expiresIn: "1h" }
  );
  return token;
};

export default generateToken;
