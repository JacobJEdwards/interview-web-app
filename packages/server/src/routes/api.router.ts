import express from "express";

import ProjectController from "../controllers/projects.controller";
import ModulesController from "../controllers/modules.controller";
import UserController from "../controllers/users.controller";

// /api routes
const router = express.Router();

/*
 * TODO: Add authentication middle ware
 * TODO: Add authorization middle ware 
 * TODO: Add validation middle ware 
 */


// Basic CRUD routes

// Project routes
router.get("/projects", ProjectController.getProjects);
router.get("/projects/:id", ProjectController.getProject);
router.post("/projects", ProjectController.createProject);
router.put("/projects/:id", ProjectController.updateProject);
router.delete("/projects/:id", ProjectController.deleteProject);

// Module routes
router.get("/modules", ModulesController.getModules);
router.get("/modules/:id", ModulesController.getModule);
router.post("/modules", ModulesController.createModule);
router.put("/modules/:id", ModulesController.updateModule);
router.delete("/modules/:id", ModulesController.deleteModule);
router.get("/modules/:id/projects", ModulesController.getProjects);
router.post("/modules/:id/projects/new", ModulesController.createProject);

// User routes
router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUser);
router.post("/users", UserController.createUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);
router.get("/users/students", UserController.getStudents);
router.get("/users/teachers", UserController.getTeachers);
router.get("/users/:id/modules", UserController.getModules);
router.get("/users/:id/projects", UserController.getProjects);
router.get(
  "/users/:userId/:moduleId/projects",
  UserController.getStudentModuleProjects
); // is this ok?

router.post("/users/:userId/:moduleId/:projectId/select", UserController.selectProject);
router.get("/users/:userId/:projectId/verify", UserController.isProjectSelected);
router.get("/teachers/:id/modules", UserController.getTeacherModules);

export default router;
