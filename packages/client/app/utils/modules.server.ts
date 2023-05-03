import type { Module } from "server/types/generated/client";
import { getUserId, getUserToken } from "./session.server";

export const getModules = async (request: Request) => {
  const token = await getUserToken(request);
  try {
    const response = await fetch("http://localhost:6060/api/modules", {
      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getModule = async (id: number, request: Request) => {
  const token = await getUserToken(request);
  try {
    const response = await fetch(`http://localhost:6060/api/modules/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createModule = async (module: Module, request: Request) => {
  const token = await getUserToken(request);
  try {
    const response = await fetch("http://localhost:6060/api/modules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(module),
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export async function getUserModules(request: Request) {
  const { userId } = await getUserId(request);
  const token = await getUserToken(request);

  if (!userId) {
    return null;
  }

  try {
    const response = await fetch(
      `http://localhost:6060/api/users/${userId}/modules`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data: Module[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getTeacherModules(request: Request) {
  const { userId } = await getUserId(request);
  const token = await getUserToken(request);

  if (!userId) {
    return null;
  }

  try {
    const response = await fetch(
      `http://localhost:6060/api/modules?teacherId=${userId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data: Module[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getModuleProjects(moduleId: number, request: Request) {
  const token = await getUserToken(request);
  try {
    const response = await fetch(
      `http://localhost:6060/api/modules/${moduleId}/projects`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
