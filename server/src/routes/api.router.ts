import express from "express";
import ProjectController from "../controllers/projects.controller";
import ModulesController from "../controllers/modules.controller";
import StudentController from "../controllers/students.controller";
import TeacherController from "../controllers/teachers.controller";

const router = express.Router();

/*
 * Needed routes !IMPORTANT
 * 1. Assign project to module and vice versa
 * 2. Assign project to a student
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

// Student route
router.get("/students", StudentController.getStudents);
router.get("/students/:id", StudentController.getStudent);
router.post("/students", StudentController.createStudent);
router.put("/students/:id", StudentController.updateStudent);
router.delete("/students/:id", StudentController.deleteStudent);

// Teacher route
router.get("/teachers", TeacherController.getTeachers);
router.get("/teachers/:id", TeacherController.getTeacher);
router.post("/teachers", TeacherController.createTeacher);
router.put("/teachers/:id", TeacherController.updateTeacher);
router.delete("/teachers/:id", TeacherController.deleteTeacher);

// Assignment routes (not CRUD)
// Possibly some of these are not needed -> need to think!!!!
// Assign project to module
// router.post("/modules/:id/project/:projectId", ModulesController.assignProjectToModule);
//
// Assign project to student
// router.post("/students/:id/project/:projectId", StudentController.assignProjectToStudent);
//
// Assign teacher to module
// router.post("/modules/:id/teacher/:teacherId", ModulesController.assignTeacherToModule);

export default router;
