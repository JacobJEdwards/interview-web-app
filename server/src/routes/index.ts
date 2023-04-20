import express from "express";
import ProjectController from "../controllers/projects";
import ModulesController from "../controllers/modules";

const router = express.Router();

router.get("/projects", ProjectController.getProjects);
router.get("/projects/:id", ProjectController.getProject);
router.post("/projects", ProjectController.createProject);
router.put("/projects/:id", ProjectController.updateProject);
router.delete("/projects/:id", ProjectController.deleteProject);

router.get("/modules", ModulesController.getModules);
router.get("/modules/:id", ModulesController.getModule);
router.post("/modules", ModulesController.createModule);
router.put("/modules/:id", ModulesController.updateModule);
router.delete("/modules/:id", ModulesController.deleteModule);

export default router;
