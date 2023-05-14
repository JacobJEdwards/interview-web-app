import { db, StatusCodes } from "../utils";
import { ServiceResponse } from "./types";

export const getProjects = async (
  moduleId?: number,
  name?: string
): Promise<ServiceResponse> => {
  try {
    const projects = await db.project.findMany({
      where: {
        moduleId,
        name: {
          contains: name,
          mode: "insensitive",
        },
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

export const getProject = async (
  projectId: number
): Promise<ServiceResponse> => {
  try {
    const project = await db.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: {
          message: "Project not found",
        },
      };
    }

    return {
      status: StatusCodes.OK,
      response: {
        message: "Project found",
        data: project,
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

export const updateProject = async (
  projectId: number,
  name: string,
  description: string,
  filePath?: string
): Promise<ServiceResponse> => {
  try {
    const project = await db.project.update({
      where: {
        id: projectId,
      },
      data: {
        name,
        description,
        filePath,
      },
    });

    if (!project) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: {
          message: "Project not found",
        },
      };
    }

    return {
      status: StatusCodes.OK,
      response: {
        message: "Project updated",
        data: project,
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

export const deleteProject = async (
  projectId: number
): Promise<ServiceResponse> => {
  try {
    const project = await db.project.delete({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: {
          message: "Project not found",
        },
      };
    }

    return {
      status: StatusCodes.OK,
      response: {
        message: "Project deleted",
        data: project,
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

export const downloadProjectFile = async (
  projectId: number
): Promise<ServiceResponse> => {
  try {
    const project = await db.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: {
          message: "Project not found",
        },
      };
    }

    if (!project.filePath) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: {
          message: "Project file not found",
        },
      };
    }

    return {
      status: StatusCodes.OK,
      response: {
        message: "Project file found",
        data: project.filePath,
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

export const createProject = async (
  moduleId: number,
  name: string,
  description: string,
  dateDue: string,
  filePath?: string
): Promise<ServiceResponse> => {
  try {
    const project = await db.project.create({
      data: {
        name,
        description,
        moduleId,
        filePath,
        dateSet: new Date(),
        dateDue: new Date(dateDue),
      },
    });

    if (!project) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: {
          message: "Project not found",
        },
      };
    }

    return {
      status: StatusCodes.OK,
      response: {
        message: "Project created",
        data: project,
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
