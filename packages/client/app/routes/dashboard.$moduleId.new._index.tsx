import { LoaderArgs, redirect } from "@remix-run/node";
import { getUserId, requireUserType } from "~/utils/session.server";
import { Role } from "server/types/generated/client";
import { Form } from "@remix-run/react";
import { newProject } from "~/utils/projects.server";
import { useLoaderData } from "@remix-run/react";
import Breadcrumbs, { RouteData } from "~/components/Breadcrumbs";

export const loader = async ({ request, params }: LoaderArgs) => {
    await requireUserType(request, Role.TEACHER);

    const { moduleId } = params;
    const { userId, userRole } = await getUserId(request);

    if (!moduleId) {
        return null;
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

    return {
        moduleId,
        userId,
        userRole,
        crumbs,
    };
};

export const action = async ({ request, params }: LoaderArgs) => {
    const { userId, userRole } = await getUserId(request);
    const { moduleId } = params;

    if (!moduleId) {
        return redirect(`/dashboard`);
    }

    const formData = await request.formData();
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    const project = await newProject(name, description, Number(moduleId), userId);

    if (project) {
        return redirect(`/dashboard/${moduleId}`);
    }
};

const NewProject = () => {
    const { moduleId, crumbs } = useLoaderData();
    return (
        <main>
            <Breadcrumbs crumbs={crumbs} />
            <h1 className="text-3xl font-bold">
                Module ID: {moduleId} - New Project
            </h1>
            <div className="divider"></div>
            <div className="flex flex-col items-center justify-center">
                <Form method="post" reloadDocument className="w-full form-control">
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
