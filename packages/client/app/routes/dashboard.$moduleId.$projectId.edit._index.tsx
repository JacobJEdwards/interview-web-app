import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useActionData } from "@remix-run/react";
import Breadcrumbs, { type RouteData } from "../components/Breadcrumbs";
import ProjectForm from "../components/ProjectForm";
import {
  getUserId,
  requireUser,
  requireUserType,
} from "../utils/session.server";
import { getProject, updateProject } from "../utils/projects.server";
import invariant from "tiny-invariant";
import { Role } from "server/types/generated/client";
import { redirect } from "@remix-run/node";

export const loader = async ({ request, params }: LoaderArgs) => {
  invariant(params.moduleId, "Missing moduleId");
  invariant(params.projectId, "Missing projectId");

  await requireUserType(request, Role.TEACHER);

  const { userId, userRole } = await getUserId(request);

  const project = await getProject(params.projectId);
  if (!project) {
    return redirect(`/dashboard/${params.moduleId}`);
  }

  const crumbs: RouteData[] = [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      name: params.moduleId,
      url: `/dashboard/${params.moduleId}`,
    },
    {
      name: project.name,
      url: `/dashboard/${params.moduleId}/${params.projectId}`,
    },
    {
      name: "Edit",
      url: `/dashboard/${params.moduleId}/${params.projectId}/edit`,
    },
  ];

  return json({
    project,
    crumbs,
    userId,
  });
};

export const action = async ({ request, params }: ActionArgs) => {
  invariant(params.moduleId, "Missing moduleId");
  invariant(params.projectId, "Missing projectId");

  const { userId } = await getUserId(request);

  const formData = await request.formData();
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;

  const [error, project] = await updateProject(
    name,
    description,
    Number(params.projectId)
  );

  if (project) {
    return redirect(`/dashboard/${params.moduleId}/${params.projectId}`);
  }

  return error;
};

export default function EditProject() {
  const { project, crumbs } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  return (
    <main>
      <Breadcrumbs crumbs={crumbs} />
      <h1 className="text-3xl font-bold mb-4">Edit Project: {project.name}</h1>
      <div className="divider"></div>
      <div className="flex flex-col items-center justify-center">
        <ProjectForm actionData={actionData} project={project} edit={true} />
      </div>
    </main>
  );
}
