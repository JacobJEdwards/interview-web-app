import invariant from "tiny-invariant";
import { downloadProject } from "../utils/projects.server";
import type { LoaderArgs } from "@remix-run/node";

export const loader = async ({ request, params }: LoaderArgs) => {
    invariant(params.moduleId, "Missing moduleId");
    invariant(params.projectId, "Missing projectId");

    const file = await downloadProject(params.projectId, request);
    return new Response(file, {
        headers: {
            "Content-Type": "application/octet-stream",
        },
    });
};
