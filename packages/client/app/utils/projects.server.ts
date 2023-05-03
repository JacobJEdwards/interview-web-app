import type { Project } from "server/types/generated/client";
import { getUserToken } from "./session.server";

export const getProject = async (id: string) => {
    const response = await fetch(`http://localhost:6060/api/projects/${id}`);
    if (!response.ok) {
        return null;
    }
    return await response.json();
};

export const getProjects = async () => {
    try {
        const response = await fetch("http://localhost:6060/api/projects");
        if (!response.ok) {
            return null;
        }

        return await response.json();
    } catch (error) {
        return null;
    }
};

export const createProject = async (project: Project) => {
    try {
        const response = await fetch("http://localhost:6060/api/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        });

        if (!response.ok) {
            const error = await response.json();
            return [error, null];
        }

        const data = await response.json();
        return [null, data];
    } catch (error) {
        return [error, null];
    }
};

export const newProject = async (
    name: string,
    description: string,
    moduleId: number,
    teacherId: number
): Promise<any[]> => {
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

        if (!response.ok) {
            return [data, null];
        }

        return [null, data];
    } catch (error) {
        return [error, null];
    }
};

export const updateProject = async (
    name: string,
    description: string,
    projectId: number
) => {
    try {
        const response = await fetch(
            `http://localhost:6060/api/projects/${projectId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: name, description: description }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return [data, null];
        }

        return [null, data];
    } catch (error) {
        return [error, null];
    }
};

export const deleteProject = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:6060/api/projects/${id}`, {
            method: "DELETE",
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
