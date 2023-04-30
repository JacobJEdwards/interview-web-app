import type { Module } from "server/types/generated/client";
import { getUserId } from "./session.server";
import type { Request } from "@remix-run/node";

export const getModules = async () => {
    try {
        const response = await fetch("http://localhost:6060/api/modules");

        if (!response.ok) {
            return null;
        }

        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getModule = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:6060/api/modules/${id}`);

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const createModule = async (module: Module) => {
    try {
        const response = await fetch("http://localhost:6060/api/modules", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(module),
        });

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export async function getUserModules(request: Request) {
    const { userId } = await getUserId(request);

    if (!userId) {
        return null;
    }

    try {
        const response = await fetch(
            `http://localhost:6060/api/users/${userId}/modules`
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

    if (!userId) {
        return null;
    }

    try {
        const response = await fetch(
            `http://localhost:6060/api/modules?teacherId=${userId}`
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

export async function getModuleProjects(moduleId: number) {
    try {
        const response = await fetch(
            `http://localhost:6060/api/modules/${moduleId}/projects`
        );

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
