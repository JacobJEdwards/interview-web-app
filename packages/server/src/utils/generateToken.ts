import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import type {User} from "../../types/generated/client";

dotenv.config();

const generateToken = (user: User) => {
    return jwt.sign(
      {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
      },
      process.env.SECRET_KEY as string,
      {expiresIn: "1h"}
  );
};

export default generateToken;
