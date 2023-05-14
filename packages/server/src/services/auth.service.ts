import { generateToken, db, StatusCodes } from "../utils";
import bcrypt from "bcryptjs";
import type { User } from "../../types/generated/client";

type LoginResponse = {
    status: number;
    response: {
        message: string;
        token?: string;
        user?: User;
    }
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    try {
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
                }
            }
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return {
                status: StatusCodes.BAD_REQUEST,
                response: {
                message: "Invalid credentials",
                }
            }
        }

        const token = generateToken(user);

        return {
            status: StatusCodes.OK,
            response: {
            message: "Login successful",
            token,
            user,
            }
        }
    } catch (error) {
        return {
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            response: {
                message: "Something went wrong",
            }
        }
    }
};
