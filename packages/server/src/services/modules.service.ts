import { StatusCodes, db } from "../utils";
import { ServiceResponse, withErrorHandling } from "./utilities";

export const getModules = withErrorHandling(
    async (teacherId?: number, name?: string): Promise<ServiceResponse> => {
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
    }
);

export const getModule = withErrorHandling(
    async (moduleId: number): Promise<ServiceResponse> => {
        const module = await db.module.findUnique({
            where: {
                id: moduleId,
            },
        });

        if (!module) {
            return {
                status: StatusCodes.NOT_FOUND,
                response: {
                    message: "Module not found",
                },
            };
        }

        return {
            status: StatusCodes.OK,
            response: {
                message: "Module found",
                data: module,
            },
        };
    }
);

export const getModuleProjects = withErrorHandling(
    async (moduleId: number): Promise<ServiceResponse> => {
        const projects = await db.project.findMany({
            where: {
                moduleId: Number(moduleId),
            },
        });

        if (!projects || projects.length === 0) {
            return {
                status: StatusCodes.NOT_FOUND,
                response: {
                    message: "No projects found",
                },
            };
        }

        return {
            status: StatusCodes.OK,
            response: {
                message: "Projects found",
                data: projects,
            },
        };
    }
);
