import type { Module } from "server/types/generated/client";
import { getUserId } from "./session.server";

export const getModules = async () => {
  try {
    const modules = await fetch("http://localhost:6060/api/modules");
    const data = await modules.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const getModule = async (id: number) => {
  try {
    const module = await fetch(`http://localhost:6060/api/modules/${id}`);
    const data = await module.json();
    return data;
  } catch (error) {
    return null;
  }
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

export async function getUserModules(request: Request) {
  const { userId } = await getUserId(request);

  if (!userId) {
    return null;
  } else {
    try {
      const modules = await fetch(
        `http://localhost:6060/api/users/${userId}/modules`
      );
      const json: Module[] = await modules.json();
      return json;
    } catch (error) {
      return null;
    }
  }
}
