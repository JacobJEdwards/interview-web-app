import type { LoaderArgs, ActionArgs } from "@remix-run/node";
import {
  moduleProjectSelected,
  selectProject,
  isProjectSelected,
} from "~/utils/user.server";
import { Form } from "@remix-run/react";
import { Role } from "server/types/generated/client";
import { requireUser, getUserId } from "~/utils/session.server";
import { getProject } from "~/utils/projects.server";
import { useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { deleteProject } from "~/utils/projects.server";
import Breadcrumbs, { type RouteData } from "~/components/Breadcrumbs";

export const loader = async ({ params, request }: LoaderArgs) => {
  await requireUser(request);

  const { moduleId, projectId } = params;

  if (!module || !projectId) {
    return redirect(`/dashboard/${moduleId}`);
  }

  const project = await getProject(projectId);

  if (!project) {
    return redirect(`/dashboard/${moduleId}`);
  }

  const { userId, userRole } = await getUserId(request);

  let isProjectSelectedByUser = false;

  if (userRole === Role.STUDENT) {
    isProjectSelectedByUser = await isProjectSelected(
      Number(userId),
      Number(projectId)
    );
  }

  const seletedProject = await moduleProjectSelected(
    Number(userId),
    Number(moduleId)
  );

  if (seletedProject) {
    isProjectSelectedByUser = true;
  }

  const crumbs = [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      name: moduleId,
      url: `/dashboard/${moduleId}`,
    },
    {
      name: project.name,
      url: `/dashboard/${moduleId}/${projectId}`,
    },
  ] as RouteData[];

  return {
    project,
    userId,
    userRole,
    isProjectSelectedByUser,
    crumbs,
  };
};

export const action = async ({ request, params }: ActionArgs) => {
  const { moduleId, projectId } = params;
  const { userId, userRole } = await getUserId(request);

  if (!moduleId || !projectId) {
    return redirect(`/dashboard/${moduleId}`);
  }

  if (userRole == Role.STUDENT) {
    await selectProject(Number(userId), Number(projectId), Number(moduleId));
    return redirect(`/dashboard/${moduleId}/${projectId}`);
  } else {
    await deleteProject(projectId);
    return redirect(`/dashboard/${moduleId}`);
  }
};

export default function ProjectRoute() {
  const { project, userId, userRole, isProjectSelectedByUser, crumbs } =
    useLoaderData();
  const { name, description } = project;
  return (
    <main>
      <Breadcrumbs crumbs={crumbs} />
      <section className="prose max-w-none">
        <h1 className="text-3xl">{name}</h1>
        <div className="divider"></div>
        <p>{description}</p>
        {(!isProjectSelectedByUser || userRole === Role.TEACHER) && (
          <Form method="post" reloadDocument>
            <button className="btn">
              {userRole === Role.STUDENT ? "Select" : "Delete"}
            </button>
          </Form>
        )}
      </section>
    </main>
  );
}
