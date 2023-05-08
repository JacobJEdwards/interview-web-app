import type { Project } from "server/types/generated/client";
import { getUserToken } from "./session.server";

export const getProject = async (id: string, request: Request) => {
    const token = await getUserToken(request);
    const response = await fetch(`http://localhost:6060/api/projects/${id}`, {
        headers: {
            Authorization: token,
        },
    });
    if (!response.ok) {
        return null;
    }
    return await response.json();
};

export const getProjects = async (request: Request) => {
    const token = await getUserToken(request);
    try {
        const response = await fetch("http://localhost:6060/api/projects", {
            headers: {
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

export const createProject = async (project: Project, request: Request) => {
    const token = await getUserToken(request);
    try {
        const response = await fetch("http://localhost:6060/api/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
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
    teacherId: number,
    request: Request,
    file?: File
): Promise<any[]> => {
    const token = await getUserToken(request);
    try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("moduleId", moduleId.toString());
        formData.append("teacherId", teacherId.toString());
        if (file) {
            formData.append("file", file);
        }

        const response = await fetch(
            `http://localhost:6060/api/modules/${moduleId}/projects/new`,
            {
                method: "POST",
                headers: {
                    //"Content-Type": "multipart/form-data",
                    Authorization: token,
                },
                body: formData,
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
    projectId: number,
    request: Request
) => {
    const token = await getUserToken(request);
    try {
        const response = await fetch(
            `http://localhost:6060/api/projects/${projectId}`,
            {
                method: "PUT",
                headers: {
                    Authorization: token,
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

export const deleteProject = async (id: string, request: Request) => {
    const token = await getUserToken(request);
    try {
        const response = await fetch(`http://localhost:6060/api/projects/${id}`, {
            method: "DELETE",
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
        console.error(error);
        return null;
    }
};
