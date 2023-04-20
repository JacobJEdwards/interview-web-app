import express from "express";
import ProjectController from "../controllers/projects";

const router = express.Router();

router.get("/projects", ProjectController.getProjects);
router.get("/projects/:id", ProjectController.getProject);
router.post("/projects", ProjectController.createProject);
router.put("/projects/:id", ProjectController.updateProject);
router.delete("/projects/:id", ProjectController.deleteProject);

export default router;
