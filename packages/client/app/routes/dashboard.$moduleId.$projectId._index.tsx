import { type LoaderArgs, type ActionArgs, json } from "@remix-run/node";
import {
    moduleProjectSelected,
    selectProject,
    isProjectSelected,
} from "~/utils/user.server";
import { Link } from "@remix-run/react";
import { Form, useLoaderData } from "@remix-run/react";
import { Role } from "server/types/generated/client";
import { requireUser, getUserId } from "~/utils/session.server";
import { getProject, deleteProject } from "~/utils/projects.server";
import { redirect } from "@remix-run/node";
import Breadcrumbs, { type RouteData } from "~/components/Breadcrumbs";
import invariant from "tiny-invariant";

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

    const selectedProject = await moduleProjectSelected(
        Number(userId),
        Number(moduleId)
    );

    if (selectedProject) {
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

    return json({
        project,
        userId,
        userRole,
        isProjectSelectedByUser,
        crumbs,
    });
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
                            {userRole === Role.STUDENT ? "Select" : "Delete"}
                        </button>
                    </Form>
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
