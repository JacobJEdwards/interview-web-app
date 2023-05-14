import { db, StatusCodes } from "../utils";
import { ServiceResponse, withErrorHandling } from "./utilities";

export const getProjects = withErrorHandling(
  async (moduleId?: number, name?: string): Promise<ServiceResponse> => {
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
  }
);

export const getProject = withErrorHandling(
  async (projectId: number): Promise<ServiceResponse> => {
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
  }
);

export const updateProject = withErrorHandling(
  async (
    projectId: number,
    name: string,
    description: string,
    filePath?: string
  ): Promise<ServiceResponse> => {
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
  }
);

export const deleteProject = withErrorHandling(
  async (projectId: number): Promise<ServiceResponse> => {
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
  }
);

export const downloadProjectFile = withErrorHandling(
  async (projectId: number): Promise<ServiceResponse> => {
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
  }
);

export const createProject = withErrorHandling(
  async (
    moduleId: number,
    name: string,
    description: string,
    dateDue: string,
    filePath?: string
  ): Promise<ServiceResponse> => {
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
  }
);
