import type { Module } from "server/types/generated/client";

export const getModules = async () => {
    const modules = await fetch("/api/modules");
    const data = await modules.json();
    return data;
};

export const getModule = async (id: string) => {
    const module = await fetch(`/api/modules/${id}`);
    const data = await module.json();
    return data;
};

export const createModule = async (module: Module) => {
    const response = await fetch("/api/modules", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(module),
    });
    const data = await response.json();
    return data;
};
