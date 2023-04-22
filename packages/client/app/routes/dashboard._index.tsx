import { getUserId } from "../utils/session.server";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Role } from "server/types/generated/client";
import type { UserSessionData } from "../utils/session.server";

export async function loader({
    request,
}: LoaderArgs): Promise<UserSessionData> {
    const { userId, userRole } = await getUserId(request);
    return { userId, userRole };
}

export default function Dashboard() {
    const { userId, userRole } = useLoaderData();

    return (
        <div>
            <h1>{userRole === Role.STUDENT ? "Student" : "Teacher"} Dashboard</h1>
        </div>
    );
}
