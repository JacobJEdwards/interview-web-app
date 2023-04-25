import { LoaderArgs } from "@remix-run/node";
import { getUserId, requireUser } from "~/utils/session.server";
import { getModule } from "~/utils/modules.service";
import { getModuleProjects } from "~/utils/modules.service";
import { redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type {
    Module as ModuleType,
    Project as ProjectType,
} from "@prisma/client";
import { Outlet } from "@remix-run/react";
import { Role } from "server/types/generated/client";
import Project from "../components/Project";
import { getUserInfo } from "../utils/user.service";

export const loader = async ({ params, request }: LoaderArgs) => {
    await requireUser(request);
    const { userId, userRole } = await getUserId(request);

    const { module: moduleId } = params;
    const module: ModuleType = await getModule(Number(moduleId));
    const projects: ProjectType[] | null = await getModuleProjects(
        Number(moduleId)
    );

    if (!module) {
        return redirect("/dashboard");
    }

    const { teacherId } = module;
    const teacher = await getUserInfo(teacherId);

    return { projects, module, userRole, userId, teacher };
};

export default function DashboardModule() {
    const { projects, module, userRole, teacher } = useLoaderData();
    return (
        <div>
            <h1>{module.name}</h1>
            {projects ? (
                <ul>
                    {projects.map((project: ProjectType) => (
                        <li key={project.id}>
                            <Project
                                name={project.name}
                                teacherId={project.teacherId}
                                projectId={project.id}
                                description={project.description}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No projects</p>
            )}
            {userRole === Role.TEACHER && (
                <Link to={`/dashboard/${module.id}/new`}>New Project</Link>
            )}
            <Outlet />
        </div>
    );
}
