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
import Breadcrumbs, { type RouteData } from "~/components/Breadcrumbs";

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

    const crumbs: RouteData[] = [
        {
            name: "Dashboard",
            url: "/dashboard",
        },
        {
            name: module.name,
            url: `/dashboard/${module.id}`,
        },
    ];

    return { projects, module, userRole, userId, teacher, crumbs };
};

export default function DashboardModule() {
    const { projects, module, userRole, teacher, crumbs } = useLoaderData();
    return (
        <div>
            <Breadcrumbs crumbs={crumbs} />
            <h1 className="text-3xl font-semibold">{module.name}</h1>
            <div className="divider"></div>

            {projects.length !== 0 ? (
                <ul className="list-disc">
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
                <p className="text-center text-2xl">No projects!</p>
            )}
            {userRole === Role.TEACHER && (
                <Link className="btn mt-10" to={`/dashboard/${module.id}/new`}>
                    New Project
                </Link>
            )}
            <Outlet />
        </div>
    );
}
