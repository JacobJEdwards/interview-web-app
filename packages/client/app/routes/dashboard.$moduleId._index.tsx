import { type LoaderArgs, json } from "@remix-run/node";
import { getUserId, requireUser } from "~/utils/session.server";
import { getModule } from "~/utils/modules.server";
import { getModuleProjects } from "~/utils/modules.server";
import { redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type {
  Module as ModuleType,
  Project as ProjectType,
} from "server/types/generated/client";
import { Role } from "server/types/generated/client";
import Project from "../components/Project";
import { getSelectedProject, getUserInfo } from "../utils/user.server";
import Breadcrumbs, { type RouteData } from "~/components/Breadcrumbs";
import invariant from "tiny-invariant";

export const loader = async ({ params, request }: LoaderArgs) => {
  invariant(params.moduleId, "Expected moduleId to be defined");
  const { moduleId } = params;

  await requireUser(request);

  const { userId, userRole } = await getUserId(request);
  const module: ModuleType = await getModule(Number(moduleId));
  let projects: ProjectType[] | null = await getModuleProjects(
    Number(moduleId)
  );

  const selectedProject: ProjectType | null = await getSelectedProject(
    userId,
    Number(moduleId)
  );

  if (selectedProject) {
    projects = projects?.filter((p) => p.id !== selectedProject.id) ?? [];
  }

  if (!module) {
    return redirect("/dashboard");
  }

  const { teacherId } = module;
  const teacher = await getUserInfo(teacherId);

  const crumbs = [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      name: module.name,
      url: `/dashboard/${moduleId}`,
    },
  ] as RouteData[];

  return json({
    projects,
    module,
    userRole,
    userId,
    teacher,
    crumbs,
    selectedProject,
  });
};

export default function DashboardModule() {
  const { projects, module, userRole, crumbs, selectedProject } =
    useLoaderData<typeof loader>();
  return (
    <main>
      <Breadcrumbs crumbs={crumbs} />
      <h1 className="text-3xl font-semibold">{module.name}</h1>
      <p className="text-xl mt-4">{module.description}</p>
      <div className="divider font-semibold pt-4">Projects:</div>

      {selectedProject && (
        <>
          <h2 className="text-2xl font-semibold">Selected Project:</h2>
          <Project {...selectedProject} />
          <div className="divider"></div>
        </>
      )}

      {projects && projects?.length !== 0 ? (
        <>
          {selectedProject && (
            <h2 className="text-2xl font-semibold">Other Projects:</h2>
          )}
          <ul
            className={selectedProject ? "list-disc opacity-60" : "list-disc"}
          >
            {projects.map((project: ProjectType) => (
              <li key={project.id} className="m-4">
                <Project
                  {...project}
                  disabled={selectedProject ? true : false}
                />
                <div className="divider"></div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-center text-2xl">No projects!</p>
      )}
      {userRole === Role.TEACHER && (
        <Link className="btn mt-10" to={`/dashboard/${module.id}/new`}>
          New Project
        </Link>
      )}
    </main>
  );
}
