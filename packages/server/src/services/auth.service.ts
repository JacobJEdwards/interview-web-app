import { generateToken, db, StatusCodes } from "../utils";
import bcrypt from "bcryptjs";
import type { User } from "../../types/generated/client";
import { ServiceResponse, withErrorHandling } from "./utilities";

type LoginResponse = ServiceResponse & {
  response: {
    message: string;
    token?: string;
    user?: User;
  };
};

export const login = withErrorHandling(
  async (email: string, password: string): Promise<LoginResponse> => {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: {
          message: "User not found",
        },
      };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return {
        status: StatusCodes.BAD_REQUEST,
        response: {
          message: "Invalid credentials",
        },
      };
    }

    const token = generateToken(user);

    return {
      status: StatusCodes.OK,
      response: {
        message: "Login successful",
        token,
        user,
      },
    };
  }
);
