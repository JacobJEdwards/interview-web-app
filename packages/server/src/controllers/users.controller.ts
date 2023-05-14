import { NextFunction, Request, Response } from "express";
import { Role } from "../../types/generated/client/";
import { asyncHandler, StatusCodes } from "../utils";
import { getUsers, getUser, getUserModules, getStudentProjects, getStudentModuleProjects, selectProject, isProjectSelected, getSelectedProject, unselectProject } from "../services";
import { user } from "../services";

class UserController {
    // get all users
    @asyncHandler
    public async getUsers(req: Request, res: Response, next: NextFunction) {
        const role = req.query.role ? (req.query.role as Role) : undefined;
        const email = req.query.email ? String(req.query.email) : undefined;
        const name = req.query.name ? String(req.query.name) : undefined;

        const { status, response } = await user.getUsers(role, email, name);

        if (status === StatusCodes.OK) {
            return res.status(status).json(response.data);
        }

        res.statusCode = status;
        return next(response);
    }

    // get user by id (no password)
    @asyncHandler
    public async getUser(req: Request, res: Response, next: NextFunction) {
        const { userId } = req.params;

        const { status, response } = await user.getUser(Number(userId));

        if (status === StatusCodes.OK) {
            return res.status(status).json(response.data);
        }

        res.statusCode = status;
        return next(response)
    }

    // get a users modules
    @asyncHandler
    public async getModules(req: Request, res: Response, next: NextFunction) {
        const { userId } = req.params;

        const { status, response } = await user.getUserModules(Number(userId));

        if (status === StatusCodes.OK) {
            return res.status(status).json(response.data);
        }

        res.statusCode = status;
        return next(response);
    }

    // get a users projects
    @asyncHandler
    public async getProjects(req: Request, res: Response, next: NextFunction) {
        const { userId } = req.params;

        const { status, response } = await user.getStudentProjects(Number(userId));

        if (status === StatusCodes.OK) {
            return res.status(status).json(response.data);
        }

        res.statusCode = status;
        return next(response);
    }

    // get a students selected projects for a module
    @asyncHandler
    public async getStudentModuleProjects(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { userId, moduleId } = req.params;

        const { status, response } = await user.getStudentModuleProjects(
            Number(userId),
            Number(moduleId)
        );

        if (status === StatusCodes.OK) {
            return res.status(status).json(response.data);
        }

        res.statusCode = status;
        return next(response);
    }

    // select a project for a module
    @asyncHandler
    public async selectProject(req: Request, res: Response, next: NextFunction) {
        const { userId, projectId, moduleId } = req.params;

        const { status, response } = await user.selectProject(
            Number(userId),
            Number(moduleId),
            Number(projectId)
        );

        if (status === StatusCodes.OK) {
            return res.status(status).json(response.data);
        }

        res.statusCode = status;
        return next(response);
    }

    @asyncHandler
    public async isProjectSelected(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { userId, projectId } = req.params;

        const { status, response } = await user.isProjectSelected(
            Number(userId),
            Number(projectId)
        );

        if (status === StatusCodes.OK) {
            return res.status(status).json(response.data);
        }

        res.statusCode = status;
        return next(response);
    }

    @asyncHandler
    public async getSelectedProject(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { userId, moduleId } = req.params;

        const { status, response } = await user.getSelectedProject(
            Number(userId),
            Number(moduleId)
        );

        if (status === StatusCodes.OK) {
            return res.status(status).json(response.data);
        }

        res.statusCode = status;
        return next(response);
    }

    @asyncHandler
    public async unselectProject(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const { userId, projectId } = req.params;

        const { status, response } = await user.unselectProject(
            Number(userId),
            Number(projectId)
        );

        if (status === StatusCodes.OK) {
            return res.status(status).json(response.data);
        }

        res.statusCode = status;
        return next(response);
    }
}

export default new UserController();
