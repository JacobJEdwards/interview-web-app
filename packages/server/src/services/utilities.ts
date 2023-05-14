import { TStatusCodes, StatusCodes } from "../utils/statusCodes";

export type ServiceResponse = {
    status: TStatusCodes;
    response: {
        message: string | unknown;
        data?: any;
    };
};

export const withErrorHandling = (fn: Function) => {
    return async (...args: any[]) => {
        try {
            return await fn(...args);
        } catch (error) {
            console.log(error);
            return {
                status: StatusCodes.INTERNAL_SERVER_ERROR,
                response: {
                    message: "Internal Server Error",
                },
            };
        }
    };
};
