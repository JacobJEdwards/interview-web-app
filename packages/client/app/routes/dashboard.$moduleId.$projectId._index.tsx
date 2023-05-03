import { type LoaderArgs, type ActionArgs, json } from "@remix-run/node";
import {
  selectProject,
  isProjectSelected,
  unselectProject,
} from "~/utils/user.server";
import { Link } from "@remix-run/react";
import { Form, useLoaderData } from "@remix-run/react";
import { Role } from "server/types/generated/client";
import { requireUser, getUserId } from "~/utils/session.server";
import { getProject, deleteProject } from "~/utils/projects.server";
import { redirect } from "@remix-run/node";
import Breadcrumbs, { type RouteData } from "~/components/Breadcrumbs";
import invariant from "tiny-invariant";

const FormActions = {
  SELECT: "SELECT",
  DELETE: "DELETE",
  UNSELECT: "UNSELECT",
} as const;

type FormAction = typeof FormActions[keyof typeof FormActions];

export const loader = async ({ params, request }: LoaderArgs) => {
  invariant(params.moduleId, "Expected moduleId to be defined");
  invariant(params.projectId, "Expected projectId to be defined");

  const { moduleId, projectId } = params;

  await requireUser(request);

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

  return json({
    project,
    userId,
    userRole,
    isProjectSelectedByUser,
    crumbs,
  });
};

export const action = async ({ request, params }: ActionArgs) => {
  invariant(params.moduleId, "Expected moduleId to be defined");
  invariant(params.projectId, "Expected projectId to be defined");

  const { moduleId, projectId } = params;
  const { userId, userRole } = await getUserId(request);

  const formData = await request.formData();
  const action = formData.get("action");

  if (action === FormActions.SELECT) {
    await selectProject(Number(userId), Number(projectId), Number(moduleId));
    return redirect(`/dashboard/${moduleId}/${projectId}`);
  }

  if (action === FormActions.DELETE) {
    await deleteProject(projectId);
    return redirect(`/dashboard/${moduleId}`);
  }

  if (action === FormActions.UNSELECT) {
    await unselectProject(Number(userId), Number(projectId));
    return redirect(`/dashboard/${moduleId}/${projectId}`);
  }
};

export default function ProjectRoute() {
  const { project, userRole, isProjectSelectedByUser, crumbs } =
    useLoaderData<typeof loader>();
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
              <input
                type="hidden"
                name="action"
                value={
                  userRole === Role.STUDENT
                    ? FormActions.SELECT
                    : FormActions.DELETE
                }
              />
              {userRole === Role.STUDENT ? "Select" : "Delete"}
            </button>
          </Form>
        )}
        {isProjectSelectedByUser && userRole === Role.STUDENT && (
          <>
            <h3 className="text-xl mt-8">Upload Submission:</h3>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-full"
            />
            <button className="btn mt-4">Submit</button>
            <Form method="post" reloadDocument>
              <button className="btn mt-4">
                <input
                  type="hidden"
                  name="action"
                  value={FormActions.UNSELECT}
                />
                Unselect
              </button>
            </Form>
          </>
        )}
        {userRole === Role.TEACHER && (
          <Link to={`/dashboard/${project.moduleId}/${project.id}/edit`}>
            Edit
          </Link>
        )}
      </section>
    </main>
  );
}
