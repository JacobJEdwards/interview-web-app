import { LoaderArgs, redirect } from "@remix-run/node";
import { getUserId, requireUserType } from "~/utils/session.server";
import { Role } from "server/types/generated/client";
import { Form } from "@remix-run/react";
import { newProject } from "~/utils/projects.service";

export const loader = async ({ request }: LoaderArgs) => {
    await requireUserType(request, Role.TEACHER);
    const { userId, userRole } = await getUserId(request);
    return null;
};

export const action = async ({ request, params }: LoaderArgs) => {
    const { userId, userRole } = await getUserId(request);
    const { module } = params;
    if (!module) {
        return { status: 404 };
    }
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    const project = await newProject(name, description, Number(module), userId);
    if (project) {
        return redirect(`/dashboard/${module}`);
    }
};

const NewProject = () => {
    return (
        <Form method="post" reloadDocument>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" />
            <button type="submit">Create</button>
        </Form>
    );
};

export default NewProject;
