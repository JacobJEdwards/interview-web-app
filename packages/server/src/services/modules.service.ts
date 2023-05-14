import { StatusCodes, db } from "../utils";

export const getModules = async (teacherId?: number, name?: string) => {
    try {
        const modules = await db.module.findMany({
            where: {
                teacherId,
                name: {
                    contains: name,
                    mode: "insensitive",
                },
            },
            include: {
                teacher: true,
            },
        });

        if (!modules || modules.length === 0) {
            return {
                status: StatusCodes.NOT_FOUND,
                response: {
                    message: "No modules found",
                },
            };
        }

        return {
            status: StatusCodes.OK,
            response: {
                message: "Modules found",
                data: modules,
            },
        };
    } catch (error) {
        return {
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            response: {
                message: error,
            },
        };
    }
};
