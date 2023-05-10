import {
    type LoaderArgs,
    type ActionArgs,
    type V2_MetaFunction,
    json,
} from "@remix-run/node";
import {
    selectProject,
    isProjectSelected,
    unselectProject,
} from "~/utils/user.server";
import { getModule } from "~/utils/modules.server";
import { Link, useActionData } from "@remix-run/react";
import { Form, useLoaderData } from "@remix-run/react";
import { Role } from "server/types/generated/client";
import { requireUser, getUserId } from "~/utils/session.server";
import {
    getProject,
    deleteProject,
    downloadProject,
} from "~/utils/projects.server";
import { redirect } from "@remix-run/node";
import Breadcrumbs, { type RouteData } from "~/components/Breadcrumbs";
import invariant from "tiny-invariant";

const FormActions = {
    SELECT: "SELECT",
    DELETE: "DELETE",
    UNSELECT: "UNSELECT",
    DOWNLOAD: "DOWNLOAD",
} as const;

type FormAction = typeof FormActions[keyof typeof FormActions];

export const loader = async ({ params, request }: LoaderArgs) => {
    invariant(params.moduleId, "Expected moduleId to be defined");
    invariant(params.projectId, "Expected projectId to be defined");

    const { moduleId, projectId } = params;

    await requireUser(request);

    const project = await getProject(projectId, request);

    if (!project) {
        return redirect(`/dashboard/${moduleId}`);
    }

    const { userId, userRole } = await getUserId(request);

    let isProjectSelectedByUser = false;

    if (userRole === Role.STUDENT) {
        isProjectSelectedByUser = await isProjectSelected(
            Number(userId),
            Number(projectId),
            request
        );
    }

    const module = await getModule(Number(moduleId), request);

    const crumbs = [
        {
            name: "Dashboard",
            url: "/dashboard",
        },
        {
            name: module.name,
            url: `/dashboard/${moduleId}`,
        },
        {
            name: project.name,
            url: `/dashboard/${moduleId}/${projectId}`,
        },
    ] as RouteData[];

    const projectFiles = await downloadProject(projectId, request);

    return json({
        project,
        userId,
        userRole,
        isProjectSelectedByUser,
        crumbs,
        projectFiles,
    });
};

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
    const { project } = data;
    return [{ title: project.name }];
};

export const action = async ({ request, params }: ActionArgs) => {
    invariant(params.moduleId, "Expected moduleId to be defined");
    invariant(params.projectId, "Expected projectId to be defined");

    const { moduleId, projectId } = params;
    const { userId, userRole } = await getUserId(request);

    const formData = await request.formData();
    const action = formData.get("action");

    switch (action) {
        case FormActions.SELECT:
            invariant(userRole === Role.STUDENT, "Only students can select projects");
            await selectProject(
                Number(userId),
                Number(projectId),
                Number(moduleId),
                request
            );
            return redirect(`/dashboard/${moduleId}/${projectId}`);
        case FormActions.DELETE:
            invariant(userRole === Role.TEACHER, "Only teachers can delete projects");
            await deleteProject(projectId, request);
            return redirect(`/dashboard/${moduleId}`);
        case FormActions.UNSELECT:
            invariant(
                userRole === Role.STUDENT,
                "Only students can unselect projects"
            );
            await unselectProject(Number(userId), Number(projectId), request);
            return redirect(`/dashboard/${moduleId}/${projectId}`);
        case FormActions.DOWNLOAD:
            return await downloadProject(projectId, request);
        //return redirect(`/dashboard/${moduleId}/${projectId}`);
        default:
            return redirect(`/dashboard/${moduleId}/${projectId}`);
    }
};

export default function ProjectRoute() {
    const { project, userRole, isProjectSelectedByUser, crumbs, projectFiles } =
        useLoaderData<typeof loader>();
    const { name, description, dateDue } = project;
    return (
        <main>
            <Breadcrumbs crumbs={crumbs} />
            <section className="prose max-w-none">
                <h1 className="text-3xl">{name}</h1>
                <p>{new Date(dateDue).toLocaleString()}</p>
                <div className="divider"></div>
                <p>{description}</p>
                <div className="flex flex-row justify-evenly mt-4 max-w-none w-full">
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
                    {userRole === Role.TEACHER && (
                        <Link
                            className="btn"
                            to={`/dashboard/${project.moduleId}/${project.id}/edit`}
                        >
                            Edit
                        </Link>
                    )}
                    <Link className={projectFiles ? "btn" : "btn btn-disabled"} to="file">
                        Download Files
                    </Link>
                </div>
                {isProjectSelectedByUser && userRole === Role.STUDENT && (
                    <>
                        <h3 className="text-xl mt-8">Upload Submission:</h3>
                        <input
                            type="file"
                            className="file-input file-input-bordered w-full max-w-full"
                        />
                        <button className="btn mt-4">Submit</button>
                        <Form method="post" reloadDocument>
                            <button className="btn mt-8">
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
            </section>
        </main>
    );
}
