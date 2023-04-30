import { z } from "zod";

// auth
export const LoginSchema = z.object({
  email: z.string().trim().email({
    message: "Invalidation email",
  }),
  password: z.string(),
});

export const idSchema = z.coerce.number().int().positive();

export const nameSchema = z.string().trim().min(1).max(255);
export const descriptionSchema = z.string().trim().min(1).max(255);

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
  name: nameSchema.optional(),
  description: descriptionSchema.optional(),
  teacherId: idSchema.optional(),
});

export const createProjectSchema = z.object({
  name: nameSchema,
  description: descriptionSchema,
  teacherId: idSchema,
});

export const getProjectsSchema = z.object({
  name: nameSchema.optional(),
  teacherId: idSchema.optional(),
  moduleId: idSchema.optional(),
});

const schemas = {
  login: LoginSchema,
  id: idSchema,
  name: nameSchema,
  description: descriptionSchema,
  getModule: getModuleSchema,
  createModule: createModuleSchema,
  updateModule: updateModuleSchema,
  getProjects: getProjectsSchema,
  createProject: createProjectSchema,
};

export default schemas;
