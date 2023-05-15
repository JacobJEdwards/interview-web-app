import { Request, Response, NextFunction } from "express";
import { asyncHandler, StatusCodes } from "../utils";

import { module, project } from "../services";

class ModulesController {
  // basic CRUD operations

  // get all modules
  @asyncHandler
  public async getModules(req: Request, res: Response, next: NextFunction) {
    const teacherId = req.query.teacherId
      ? Number(req.query.teacherId)
      : undefined;
    const name = req.query.name ? String(req.query.name) : undefined;

    const { status, response } = await module.getModules(teacherId, name);

    if (status === StatusCodes.OK) {
      return res.status(status).json(response.data);
    }

    res.statusCode = status;
    next(response);
  }

  // get specific module
  @asyncHandler
  public async getModule(req: Request, res: Response, next: NextFunction) {
    const { moduleId } = req.params;

    const { status, response } = await module.getModule(Number(moduleId));

    if (status === StatusCodes.OK) {
      return res.status(status).json(response.data);
    }

    res.statusCode = status;
    next(response);
  }

  // get a module's projects
  @asyncHandler
  public async getModuleProjects(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { moduleId } = req.params;

    const { status, response } = await module.getModuleProjects(
      Number(moduleId)
    );

    if (status === StatusCodes.OK) {
      return res.status(status).json(response.data);
    }

    res.statusCode = status;
    return next(response);
  }

  // create and connect project to module
  @asyncHandler
  public async createProject(req: Request, res: Response, next: NextFunction) {
    const filePath = req.file ? req.file.path : undefined;

    const { name, description, dateDue } = req.body;
    const { moduleId } = req.params;

    const { status, response } = await project.createProject(
      Number(moduleId),
      name,
      description,
      dateDue as string,
      filePath
    );

    if (status === StatusCodes.OK) {
      return res.status(status).json(response.data);
    }

    res.statusCode = status;
    return next(response);
  }
}

export default new ModulesController();
