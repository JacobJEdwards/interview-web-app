import { z } from "zod";

export const idSchema = z.coerce.number().int().positive();
export const nameSchema = z.string().trim().min(1).max(255);
export const descriptionSchema = z.string().trim().min(1).max(255);
export const roleSchema = z.enum(["STUDENT", "TEACHER", "ADMIN"]);
export const emailSchema = z.string().trim().email({
    message: "Invalid email",
});

// auth
export const LoginSchema = z.object({
    email: emailSchema,
    password: z.string(),
});

export const getModuleSchema = z.object({
    name: nameSchema.optional(),
    teacherId: idSchema.optional(),
});

export const tokenSchema = z.object({
    name: nameSchema,
    id: idSchema,
    email: z.string().trim().email(),
    role: roleSchema,
    iat: z.number(),
    exp: z.number(),
});

export const createModuleSchema = z.object({
    name: nameSchema,
    description: descriptionSchema,
    teacherId: idSchema,
});

export const updateModuleSchema = z.object({
    name: nameSchema.optional(),
    description: descriptionSchema.optional(),
    teacherId: idSchema.optional(),
});

export const createProjectSchema = z.object({
    name: nameSchema,
    description: descriptionSchema,
    teacherId: idSchema,
    dateDue: z.date().optional(),
    fileName: z.string().optional(),
});

export const getProjectsSchema = z.object({
    name: nameSchema.optional(),
    teacherId: idSchema.optional(),
    moduleId: idSchema.optional(),
});

export const updateProjectSchema = z.object({
    name: nameSchema.optional(),
    description: descriptionSchema.optional(),
    teacherId: idSchema.optional(),
    dateDue: z.date().optional(),
    fileName: z.string().optional(),
});

const schemas = {
    login: LoginSchema,
    id: idSchema,
    token: tokenSchema,
    name: nameSchema,
    description: descriptionSchema,
    getModule: getModuleSchema,
    createModule: createModuleSchema,
    updateModule: updateModuleSchema,
    getProjects: getProjectsSchema,
    createProject: createProjectSchema,
    updateProject: updateProjectSchema,
};

export default schemas;
