import type { Project, Role, User } from "server/types/generated/client";
import { getUserToken } from "./session.server";

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  role: Role;
}

export const getUserInfo = async (
  id: number,
  request: Request
): Promise<UserInfo | null> => {
  const token = await getUserToken(request);
  try {
    const response = await fetch(`http:localhost:6060/api/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    return null;
  }
};

export const selectProject = async (
  userId: number,
  projectId: number,
  moduleId: number,
  request: Request
): Promise<Project | null> => {
  const token = await getUserToken(request);
  try {
    const response = await fetch(
      `http:localhost:6060/api/users/${userId}/${moduleId}/${projectId}/select`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    return null;
  }
};

export const unselectProject = async (
  userId: number,
  projectId: number,
  request: Request
): Promise<User | null> => {
  const token = await getUserToken(request);
  try {
    const response = await fetch(
      `http:localhost:6060/api/users/${userId}/${projectId}/unselect`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    return null;
  }
};

export const isProjectSelected = async (
  userId: number,
  projectId: number,
  request: Request
): Promise<boolean> => {
  const token = await getUserToken(request);
  try {
    const response = await fetch(
      `http:localhost:6060/api/users/${userId}/${projectId}/verify`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );

    if (!response.ok) {
      return false;
    }

    return await response.json();
  } catch (error) {
    return false;
  }
};

export const getSelectedProject = async (
  userId: number,
  moduleId: number,
  request: Request
): Promise<Project | null> => {
  const token = await getUserToken(request);
  try {
    const response = await fetch(
      `http:localhost:6060/api/users/${userId}/${moduleId}/selected`,
      {
        method: "GET",
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
    return null;
  }
};

export const getUsersByRole = async (
  role: Role,
  request: Request
): Promise<UserInfo[] | null> => {
  const token = await getUserToken(request);
  try {
    const response = await fetch(`http:localhost:6060/api/users?role=${role}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    return null;
  }
};
