import { Server } from "http";
import { StatusCodes, db } from "../utils";
import type { ServiceResponse } from "./types";

export const getModules = async (
  teacherId?: number,
  name?: string
): Promise<ServiceResponse> => {
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

export const getModule = async (moduleId: number): Promise<ServiceResponse> => {
  try {
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
  } catch (error) {
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      response: {
        message: error,
      },
    };
  }
};

export const getModuleProjects = async (
  moduleId: number
): Promise<ServiceResponse> => {
  try {
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
  } catch (error) {
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      response: {
        message: error,
      },
    };
  }
};
