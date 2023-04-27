import type { Role, Project } from "server/types/generated/client";
export interface UserInfo {
  id: number;
  name: string;
  email: string;
  role: Role;
}

export const getUserInfo = async (id: number): Promise<UserInfo | null> => {
  try {
    const response = await fetch(`http:localhost:6060/api/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const selectProject = async (
  userId: number,
  projectId: number
): Promise<Project | null> => {
  try {
    const response = await fetch(
      `http:localhost:6060/api/users/${userId}/${projectId}/select`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const isProjectSelected = async (
  userId: number,
  projectId: number
): Promise<boolean> => {
  try {
    const response = await fetch(
      `http:localhost:6060/api/users/${userId}/${projectId}/verify`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return false;
  }
};

export const moduleProjectSelected = async (
  userId: number,
  moduleId: number
): Promise<Project | null> => {
  try {
    const response = await fetch(
      `http:localhost:6060/api/users/${userId}/${moduleId}/selected`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};
