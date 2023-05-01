import { type LoaderArgs, redirect, json } from "@remix-run/node";
import { getUserId, requireUserType } from "~/utils/session.server";
import { Role } from "server/types/generated/client";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { newProject } from "~/utils/projects.server";
import Breadcrumbs, { RouteData } from "~/components/Breadcrumbs";

export const loader = async ({ request, params }: LoaderArgs) => {
    await requireUserType(request, Role.TEACHER);

    const { moduleId } = params;
    const { userId, userRole } = await getUserId(request);

    if (!moduleId) {
        return redirect(`/dashboard`);
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

export const action = async ({ request, params }: LoaderArgs) => {
    const { userId } = await getUserId(request);
    const { moduleId } = params;

    if (!moduleId) {
        return redirect(`/dashboard`);
    }

    const formData = await request.formData();
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    const [error, project] = await newProject(
        name,
        description,
        Number(moduleId),
        userId
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
                <Form method="post" reloadDocument className="w-full form-control">
                    {actionData && (
                        <div className="alert alert-error shadow-lg mt-4 mb-4 flex items-centre justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current flex-shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="font-semibold">Invalid name or description</span>
                        </div>
                    )}
                    <div className="mb-6 w-full">
                        <label htmlFor="name" className="label">
                            <span className="label-text font-semibold">Project name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter project name..."
                            className="input input-bordered w-full bg-gray-800 placeholder:italic"
                            required
                        />
                    </div>
                    <div className="mb-6 w-full">
                        <label className="label" htmlFor="description">
                            <span className="label-text font-semibold">
                                Project description
                            </span>
                        </label>
                        <textarea
                            rows={5}
                            placeholder="Enter project description..."
                            name="description"
                            id="description"
                            className="textarea textarea-bordered w-full h-24 bg-gray-800 placeholder:italic"
                            required
                        />
                    </div>
                    <div className="w-full mb-6">
                        <label className="label" htmlFor="fileupload">
                            <span className="label-text font-semibold">Files upload</span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered w-full"
                            id="fileupload"
                            name="fileupload"
                        />
                    </div>
                    <button className="btn btn-block mt-8" type="submit">
                        Create
                    </button>
                </Form>
            </div>
        </main>
    );
};

export default NewProject;
