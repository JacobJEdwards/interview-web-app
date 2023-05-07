import { getUser, requireUser } from "~/utils/session.server";
import { getTeacherModules } from "~/utils/modules.server";
import { type LoaderArgs, type V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Role } from "server/types/generated/client";
import Breadcrumbs from "~/components/Breadcrumbs";

export const meta: V2_MetaFunction = () => {
    return [{ title: "Dashboard" }];
};

export async function loader({ request }: LoaderArgs) {
    await requireUser(request);

    const user = await getUser(request);

    if (user?.role === Role.TEACHER) {
        const modules = await getTeacherModules(request);
        return json({ modules, user });
    }

    return json({ user });
}

export default function Dashboard() {
    const { user } = useLoaderData<typeof loader>();

    return (
        <main>
            <Breadcrumbs crumbs={[{ name: "Dashboard", url: "/dashboard" }]} />
            <h1 className="text-3xl font-semibold">
                {user?.role === Role.TEACHER ? "Teacher" : "Student"} Dashboard
            </h1>
            <div className="divider"></div>
            <div className="prose max-w-none">
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        </main>
    );
}
