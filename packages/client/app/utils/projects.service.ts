import type { Module, Project } from "server/types/generated/client";

export const getProject = async (id: string) => {
  const response = await fetch(`/api/project/${id}`);
  const data = await response.json();
  return data;
};

export const getProjects = async () => {
  const response = await fetch(`/api/project`);
  const data = await response.json();
  return data;
};

export const createProject = async (project: Project) => {
  const response = await fetch(`/api/project`, {
    method: "POST",
    body: JSON.stringify(project),
  });
  const data = await response.json();
  return data;
};

export const updateProject = async (project: Project) => {
  const response = await fetch(`/api/project/${project.id}`, {
    method: "PUT",
    body: JSON.stringify(project),
  });
  const data = await response.json();
  return data;
};

export const deleteProject = async (id: string) => {
  const response = await fetch(`/api/project/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

export const newProject = async (
  name: string,
  description: string,
  moduleId: number,
  teacherId: number
): Promise<Project | null> => {
  console.log(name, description, moduleId, teacherId);
  try {
    const response = await fetch(
      `http://localhost:6060/api/modules/${moduleId}/projects/new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, teacherId }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};
