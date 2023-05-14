import express from "express";
import {
    validators
} from "../middleware";

import { ProjectController, ModulesController, UserController } from "../controllers";

// /api routes
const router = express.Router();

/*
 * TODO: Add validation middle ware
 */

// type checking on params using zod
router.param("userId", validators.idParamValidation);
router.param("moduleId", validators.idParamValidation);
router.param("projectId", validators.idParamValidation);
router.param("teacherId", validators.idParamValidation);

// Basic CRUD routes

// Project routes
router.get("/projects", ProjectController.getProjects);
router.get("/projects/:projectId", ProjectController.getProject);
router.post("/projects", ProjectController.createProject);
router.put("/projects/:projectId", ProjectController.updateProject);
router.delete("/projects/:projectId", ProjectController.deleteProject);
router.get("/projects/:projectId/download", ProjectController.downloadFile);

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
router.get("/users/:userId/modules", UserController.getModules);
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
