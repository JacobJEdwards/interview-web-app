import { z } from "zod";

export const LoginSchema = z.object({
    email: z
        .string()
        .email({
            message: "Invalidation email",
        })
        .trim()
        .toLowerCase(),
    password: z.string(),
});

export const idSchema = z.number().int().positive();

export const nameSchema = z.string().min(1).max(255);
export const descriptionSchema = z.string().min(1).max(255);

export const getModuleSchema = z.object({
    name: nameSchema.optional(),
    teacherId: idSchema.optional(),
});

export const createModuleSchema = z.object({
    name: nameSchema,
    description: descriptionSchema,
    teacherId: idSchema,
});

export const updateModuleSchema = z.object({
    name: nameSchema,
    description: descriptionSchema,
    teacherId: idSchema,
});

export const createProjectSchema = z.object({
    name: nameSchema,
    description: descriptionSchema,
    teacherId: idSchema,
});
