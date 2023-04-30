import { z } from "zod";

// auth
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

export const idSchema = z.coerce.number().int().positive();

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
  moduleId: idSchema,
  description: descriptionSchema,
  teacherId: idSchema,
});

export const createProjectSchema = z.object({
  name: nameSchema,
  description: descriptionSchema,
  teacherId: idSchema,
  moduleId: idSchema,
});

export const getProjectsSchema = z.object({
  name: nameSchema.optional(),
  teacherId: idSchema.optional(),
  moduleId: idSchema.optional(),
});

// could do like this then default export them schemas.login.parse etc
// const schemas = {
//   login: loginSchema,
//   id: idSchema,
//   name: nameSchema,
//   description: descriptionSchema,
//   email: emailSchema,
//   getModule: getModuleSchema,
//   createModule: createModuleSchema,
//   updateModule: updateModuleSchema,
//   createProject: createProjectSchema,
// };);
