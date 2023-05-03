import type { Project, Role, User } from "server/types/generated/client";
import { getUserToken } from "./session.server";

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
    moduleId: number
): Promise<Project | null> => {
    try {
        const response = await fetch(
            `http:localhost:6060/api/users/${userId}/${moduleId}/${projectId}/select`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
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
    projectId: number
): Promise<User | null> => {
    try {
        const response = await fetch(
            `http:localhost:6060/api/users/${userId}/${projectId}/unselect`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
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
    projectId: number
): Promise<boolean> => {
    try {
        const response = await fetch(
            `http:localhost:6060/api/users/${userId}/${projectId}/verify`
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
    moduleId: number
): Promise<Project | null> => {
    try {
        const response = await fetch(
            `http:localhost:6060/api/users/${userId}/${moduleId}/selected`
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
    role: Role
): Promise<UserInfo[] | null> => {
    try {
        const response = await fetch(`http:localhost:6060/api/users?role=${role}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
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
