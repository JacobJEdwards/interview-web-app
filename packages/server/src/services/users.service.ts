import { Role } from "../../types/generated/client";
import { db, StatusCodes } from "../utils";
import { ServiceResponse } from './types'

export const getUsers = async (role?: Role, email?: string, name?: string): Promise<ServiceResponse> => {
  try {
    const users = await db.user.findMany({
      where: { role, email, name },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!users || users.length === 0) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: { message: "Users not found" },
      };
    }

    return {
      status: StatusCodes.OK,
      response: {
        message: "Users found",
        data: users
      },
    };
  } catch (error) {
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      response: { message: error },
    };
  }
};

export const getUser = async (userId: number): Promise<ServiceResponse> => {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: { message: "User not found" },
      };
    }

    return {
      status: StatusCodes.OK,
      response: {
        message: "User found",
        data: user
      },
    };
  } catch (error) {
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      response: { message: error },
    };
  }
};

export const getUserModules = async (userId: number): Promise<ServiceResponse> => {
  try {
    const modules = await db.user
      .findUnique({
        where: { id: userId },
      })
      .modules();

    if (!modules || modules.length === 0) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: { message: "Modules not found" },
      };
    }

    return {
      status: StatusCodes.OK,
      response: {
        message: "Modules found",
        data: modules
      },
    };
  } catch (error) {
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      response: { message: error },
    };
  }
};

export const getStudentProjects = async (userId: number): Promise<ServiceResponse> => {
  try {
    const projects = await db.user
      .findUnique({
        where: { id: userId },
      })
      .studentProjects();

    if (!projects || projects.length === 0) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: { message: "Projects not found" },
      };
    }

    return {
      status: StatusCodes.OK,
      response: {
        message: "Projects found",
        data: projects
      },
    };
  } catch (error) {
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      response: { message: error },
    };
  }
}

export const getStudentModuleProjects = async (userId: number, moduleId: number): Promise<ServiceResponse> => {
  try {
    const projects = await db.user
      .findUnique({
        where: { id: userId },
      })
      .studentProjects({
        where: { moduleId }
      });

    if (!projects || projects.length === 0) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: { message: "Projects not found" },
      };
    }

    return {
      status: StatusCodes.OK,
      response: {
        message: "Projects found",
        data: projects
      },
    };
  } catch (error) {
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      response: { message: error },
    };
  }
}

export const selectProject = async (userId: number, moduleId: number, projectId: number): Promise<ServiceResponse> => {
  try {
    const previousProject = await db.user.findUnique({
      where: { id: userId }, select: {
        studentProjects: {
          where: {
            module: { id: moduleId }
          }
        }
      }
    });

    if (previousProject && previousProject?.studentProjects?.length > 0) {
      const previousProjectId = previousProject.studentProjects[0].id;
      await db.user.update({
        where: {
          id: userId,
        },
        data: {
          studentProjects: {
            disconnect: {
              id: previousProjectId,
            },
          },
        },
      });
    }

    const project = await db.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: { message: "Project not found" },
      };
    }

    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        studentProjects: {
          connect: {
            id: projectId,
          },
        },
      },
    });

    return {
      status: StatusCodes.OK,
      response: {
        message: "Project selected",
        data: project
      },
    };
  } catch (error) {
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      response: { message: error },
    };
  }
}

export const isProjectSelected = async (userId: number, projectId: number): Promise<ServiceResponse> => {
  try {
    const project = await db.user.findUnique({
      where: { id: userId },
      select: {
        studentProjects: {
          where: {
            id: projectId
          }
        }
      }
    });

    if (!project || project.studentProjects.length === 0) {
      return {
        status: StatusCodes.OK,
        response: {
          message: "Project not found",
          data: false
        },
      };
    }

    return {
      status: StatusCodes.OK,
      response: {
        message: "Project found",
        data: true
      },
    };
  } catch (error) {
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      response: { message: error },
    };
  }
}

export const getSelectedProject = async (userId: number, moduleId: number): Promise<ServiceResponse> => {
  try {
    const project = await db.user.findUnique({
      where: { id: userId },
      select: {
        studentProjects: {
          where: {
            module: { id: moduleId }
          }
        }
      }
    });

    if (!project || project.studentProjects.length === 0) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: { message: "Project not found" },
      };
    }

    return {
      status: StatusCodes.OK,
      response: {
        message: "Project found",
        data: project.studentProjects[0]
      },
    };
  } catch (error) {
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      response: { message: error },
    };
  }
}

export const unselectProject = async (userId: number, projectId: number): Promise<ServiceResponse> => {
  try {
    const project = await db.user.update({
      where: {
        id: userId,
      },
      data: {
        studentProjects: {
          disconnect: {
            id: projectId,
          },
        },
      },
    });

    if (!project) {
      return {
        status: StatusCodes.NOT_FOUND,
        response: { message: "Project not found" },
      };
    }

    return {
      status: StatusCodes.OK,
      response: {
        message: "Project unselected",
        data: project
      },
    };
  } catch (error) {
    return {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      response: { message: error },
    };
  }
}
