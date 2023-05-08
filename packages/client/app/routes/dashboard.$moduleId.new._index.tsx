import {
  type LoaderArgs,
  type V2_MetaFunction,
  redirect,
  json,
  unstable_parseMultipartFormData,
  unstable_createMemoryUploadHandler,
} from "@remix-run/node";
import { getUserId, requireUserType } from "~/utils/session.server";
import { Role } from "server/types/generated/client";
import { useActionData, useLoaderData } from "@remix-run/react";
import { newProject } from "~/utils/projects.server";
import Breadcrumbs, { RouteData } from "~/components/Breadcrumbs";
import ProjectForm from "~/components/ProjectForm";
import invariant from "tiny-invariant";

export const loader = async ({ request, params }: LoaderArgs) => {
  invariant(params.moduleId, "Expected moduleId to be defined");
  const { moduleId } = params;

  await requireUserType(request, Role.TEACHER);

  const { userId, userRole } = await getUserId(request);

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
      name: "New Project",
      url: `/dashboard/${moduleId}/new`,
    },
  ] as RouteData[];

  return json({
    moduleId,
    userId,
    userRole,
    crumbs,
  });
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Project" }];
};

export const action = async ({ request, params }: LoaderArgs) => {
  invariant(params.moduleId, "Expected moduleId to be defined");
  const { userId } = await getUserId(request);
  const { moduleId } = params;

  const uploadHandler = unstable_createMemoryUploadHandler({
    maxPartSize: 10_000_000,
  });

  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const file = formData.get("fileupload") as File;

  const [error, project] = await newProject(
    name,
    description,
    Number(moduleId),
    userId,
    request,
    file
  );

  if (project) {
    return redirect(`/dashboard/${moduleId}`);
  }
  // look at logout see how to fix it
  return error;
};

const NewProject = () => {
  const { moduleId, crumbs } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  return (
    <main>
      <Breadcrumbs crumbs={crumbs} />
      <h1 className="text-3xl font-bold">
        Module ID: {moduleId} - New Project
      </h1>
      <div className="divider"></div>
      <div className="flex flex-col items-center justify-center">
        <ProjectForm actionData={actionData} edit={false} />
      </div>
    </main>
  );
};

export default NewProject;
