export { login } from './auth.service';
export { getModules, getModule, getModuleProjects } from './modules.service';
export { getProjects, getProject, updateProject, deleteProject, downloadProjectFile, createProject } from './projects.service';
export { getUsers, getUser, getUserModules, getStudentProjects, getStudentModuleProjects, selectProject, isProjectSelected, getSelectedProject, unselectProject } from './users.service';
export * as auth from './auth.service';
export * as user from './users.service';
export * as module from './modules.service';
export * as project from './projects.service';

