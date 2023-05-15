// Purpose: Defines the routes for the api
import express from "express";
import { validators } from "../middleware";

import {
  ProjectController,
  ModulesController,
  UserController,
} from "../controllers";

// /api routes
const router = express.Router();

// type checking on params using zod
router.param("userId", validators.idParamValidation);
router.param("moduleId", validators.idParamValidation);
router.param("projectId", validators.idParamValidation);
router.param("teacherId", validators.idParamValidation);

// Project routes
router.get(
  "/projects",
  validators.getProjectsValidation,
  ProjectController.getProjects
);
router.get("/projects/:projectId", ProjectController.getProject);
router.put(
  "/projects/:projectId",
  validators.updateProjectValidation,
  ProjectController.updateProject
);
router.delete("/projects/:projectId", ProjectController.deleteProject);
router.get("/projects/:projectId/download", ProjectController.downloadFile);

// Module routes
router.get(
  "/modules",
  validators.getModulesValidation,
  ModulesController.getModules
);
router.get("/modules/:moduleId", ModulesController.getModule);
router.get("/modules/:moduleId/projects", ModulesController.getModuleProjects);
router.post(
  "/modules/:moduleId/projects/new",
  validators.newProjectValidation,
  ModulesController.createProject
);

// User routes
router.get("/users", UserController.getUsers);
router.get("/users/:userId", UserController.getUser);
router.get("/users/:userId/modules", UserController.getModules);
router.get("/users/:userId/projects", UserController.getProjects);
router.get(
  "/users/:userId/:moduleId/projects",
  UserController.getStudentModuleProjects
);
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
