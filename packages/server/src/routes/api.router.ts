import express from "express";
import { idParamValidation } from "../validation";

import ProjectController from "../controllers/projects.controller";
import ModulesController from "../controllers/modules.controller";
import UserController from "../controllers/users.controller";

import validateToken from "../auth";

// /api routes
const router = express.Router();

/*
 * TODO: Add authentication middle ware
 * TODO: Add authorization middle ware
 * TODO: Add validation middle ware
 */

// type checking on params using zod
router.param("userId", idParamValidation);
router.param("moduleId", idParamValidation);
router.param("projectId", idParamValidation);
router.param("teacherId", idParamValidation);

// Basic CRUD routes

// Project routes
router.get("/projects", ProjectController.getProjects);
router.get("/projects/:projectId", ProjectController.getProject);
router.post("/projects", ProjectController.createProject);
router.put("/projects/:projectId", ProjectController.updateProject);
router.delete("/projects/:projectId", ProjectController.deleteProject);

// Module routes
router.get("/modules", ModulesController.getModules);
router.get("/modules/:moduleId", ModulesController.getModule);
router.post("/modules", ModulesController.createModule);
router.put("/modules/:moduleId", ModulesController.updateModule);
router.delete("/modules/:moduleId", ModulesController.deleteModule);
router.get("/modules/:moduleId/projects", ModulesController.getProjects);
router.post("/modules/:moduleId/projects/new", ModulesController.createProject);

// User routes
router.get("/users", UserController.getUsers);
router.get("/users/:userId", UserController.getUser);
router.post("/users", UserController.createUser);
router.put("/users/:userId", UserController.updateUser);
router.delete("/users/:userId", UserController.deleteUser);
router.get("/users/:userId/modules", validateToken, UserController.getModules);
router.get("/users/:userId/projects", UserController.getProjects);
router.get(
  "/users/:userId/:moduleId/projects",
  UserController.getStudentModuleProjects
); // is this ok?
router.get(
  "/users/:userId/:moduleId/selected",
  UserController.getSelectedProject
);

router.post(
  "/users/:userId/:moduleId/:projectId/select",
  UserController.selectProject
);
router.get(
  "/users/:userId/:projectId/verify",
  UserController.isProjectSelected
);
router.post(
  "/users/:userId/:projectId/unselect",
  UserController.unselectProject
);

export default router;
