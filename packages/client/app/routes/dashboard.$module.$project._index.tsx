import type { LoaderArgs, ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Role } from "server/types/generated/client";
import { requireUser, getUserId } from "~/utils/session.server";
import { getProject } from "~/utils/projects.service";
import { useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { deleteProject } from "~/utils/projects.service";
import { selectProject, isProjectSelected } from "~/utils/user.service";
import Breadcrumbs, { type RouteData } from "~/components/Breadcrumbs";

export const loader = async ({ params, request }: LoaderArgs) => {
  await requireUser(request);

  const { module, project } = params;

  if (!module || !project) {
    return redirect(`/dashboard/${module}`);
  }

  const actualProject = await getProject(project);

  if (!actualProject) {
    return redirect(`/dashboard/${module}`);
  }

  const { userId, userRole } = await getUserId(request);

  let isProjectSelectedByUser = false;

  if (userRole === Role.STUDENT) {
    isProjectSelectedByUser = await isProjectSelected(
      Number(userId),
      Number(project)
    );
  }

  const crumbs: RouteData[] = [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      name: module,
      url: `/dashboard/${module}`,
    },
    {
      name: actualProject.name,
      url: `/dashboard/${module}/${project}`,
    },
  ];

  return {
    project: actualProject,
    userId,
    userRole,
    isProjectSelectedByUser,
    crumbs,
  };
};

export const action = async ({ request, params }: ActionArgs) => {
  const { module, project } = params;
  const { userId, userRole } = await getUserId(request);

  if (!module || !project) {
    return redirect(`/dashboard/${module}`);
  }

  if (userRole == Role.STUDENT) {
    await selectProject(Number(userId), Number(project));
    return redirect(`/dashboard/${module}/${project}`);
  } else {
    await deleteProject(project);
    return redirect(`/dashboard/${module}`);
  }
};

export default function ProjectRoute() {
  const { project, userId, userRole, isProjectSelectedByUser, crumbs } =
    useLoaderData<typeof loader>();
  const { name, description } = project;
  return (
    <main>
      <Breadcrumbs crumbs={crumbs} />
      <div className="prose max-w-none">
        <h1 className="text-3xl">{name}</h1>
        <div className="divider"></div>
        <p>{description}</p>
        {!isProjectSelectedByUser && (
          <Form method="post" reloadDocument>
            <button className="btn">
              {userRole === Role.STUDENT ? "Select" : "Delete"}
            </button>
          </Form>
        )}
      </div>
    </main>
  );
}
