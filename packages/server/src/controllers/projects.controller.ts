import { Request, Response, NextFunction } from "express";
import path from "path";
import { asyncHandler, StatusCodes } from "../utils";
import { getProject, getProjects, updateProject, deleteProject, downloadProjectFile } from "../services";

class ProjectsController {
  // basic CRUD operations

  // get all projects
  @asyncHandler
  public async getProjects(req: Request, res: Response, next: NextFunction) {
    const name = String(req.query.name) ?? undefined;
    const moduleId = Number(req.query.moduleId) ?? undefined;

    const { status, response } = await getProjects(moduleId, name);

    if (status === StatusCodes.OK) {
      return res.status(status).json(response.data);
    }

    res.statusCode = status;
    return next(response);
  }

  // get specific project
  @asyncHandler
  public async getProject(req: Request, res: Response, next: NextFunction) {
    const { projectId } = req.params;

    const { status, response } = await getProject(Number(projectId));

    if (status === StatusCodes.OK) {
      return res.status(status).json(response.data);
    }

    res.statusCode = status;
    return next(response);
  }

  // update project
  @asyncHandler
  public async updateProject(req: Request, res: Response, next: NextFunction) {
    const { name, description } = req.body;
    const filePath = req.file?.path ?? undefined;
    const { projectId } = req.params;

    const { status, response } = await updateProject(
      Number(projectId),
      name,
      description,
      filePath
    );

    if (status === StatusCodes.OK) {
      return res.status(status).json(response.data);
    }

    res.statusCode = status;
    return next(response);
  }

  // delete project
  @asyncHandler
  public async deleteProject(req: Request, res: Response, next: NextFunction) {
    const { projectId } = req.params;

    const { status, response } = await deleteProject(Number(projectId));

    if (status === StatusCodes.OK) {
      return res.status(status).json(response.data);
    }

    res.statusCode = status;
    return next(response);
  }

  // download project file
  @asyncHandler
  public async downloadFile(req: Request, res: Response, next: NextFunction) {
    const { projectId } = req.params;

    const { status, response } = await downloadProjectFile(Number(projectId));

    // on error
    if (status !== StatusCodes.OK || !response.data) {
      res.statusCode = status;
      return next(response);
    }

    return res.sendFile(response.data, {
      root: path.join(__dirname, "../../"),
    });
  }
}

export default new ProjectsController();
