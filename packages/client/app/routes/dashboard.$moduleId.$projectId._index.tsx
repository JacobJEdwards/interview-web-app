import type { LoaderArgs, ActionArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
    selectProject,
    isProjectSelected,
    unselectProject,
} from "~/utils/user.server";
import { getModule } from "~/utils/modules.server";
import { useLoaderData, Link, Form } from "@remix-run/react";
import { Role } from "server/types/generated/client";
import { requireUser, getUserId } from "~/utils/session.server";
import {
    getProject,
    deleteProject,
    downloadProject,
} from "~/utils/projects.server";
import Breadcrumbs, { type RouteData } from "~/components/Breadcrumbs";
import invariant from "tiny-invariant";
import ButtonForm from "~/components/ButtonForm";

const FormActions = {
    SELECT: "SELECT",
    DELETE: "DELETE",
    UNSELECT: "UNSELECT",
    DOWNLOAD: "DOWNLOAD",
    SUBMIT: "SUBMIT",
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

    project.dateDue = new Date(project.dateDue).toUTCString();

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
                <p>{dateDue}</p>
                <div className="divider"></div>
                <p>{description}</p>
                <div className="flex flex-row justify-evenly mt-4 max-w-none w-full">
                    {/* Show buttons based on user role */}
                    {userRole === Role.TEACHER && (
                        <>
                            <Link
                                className="btn"
                                to={`/dashboard/${project.moduleId}/${project.id}/edit`}
                                prefetch="intent"
                            >
                                Edit
                            </Link>
                            <ButtonForm
                                formAction={FormActions.DELETE}
                                requireConfirmation={true}
                                confirmMessage="Are you sure you want to delete this project?"
                            >
                                Delete
                            </ButtonForm>
                        </>
                    )}

                    {/* If student and project is not selected */}
                    {userRole === Role.STUDENT && !isProjectSelectedByUser && (
                        <ButtonForm formAction={FormActions.SELECT}>Select</ButtonForm>
                    )}

                    {/* Anyone can download the files */}
                    <Link
                        className={projectFiles ? "btn" : "btn btn-disabled"}
                        to="file"
                        prefetch="intent"
                    >
                        Download Files
                    </Link>
                </div>

                {/* If student and projected is selected */}
                {isProjectSelectedByUser && userRole === Role.STUDENT && (
                    <>
                        <h3 className="text-xl mt-8">Upload Submission:</h3>
                        <input
                            type="file"
                            className="file-input file-input-bordered w-full max-w-full"
                        />
                        <button className="btn mt-4">Submit</button>
                        <div className="divider my-8"></div>
                        <ButtonForm
                            formAction={FormActions.UNSELECT}
                            requireConfirmation={true}
                            confirmMessage="Are you sure you want to unselect this project?"
                        >
                            Unselect
                        </ButtonForm>
                    </>
                )}
            </section>
        </main>
    );
}
