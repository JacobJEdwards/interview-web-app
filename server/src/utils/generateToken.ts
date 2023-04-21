import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

interface User {
    id: string;
    email: string;
}

const generateToken = (user: User) => {
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
