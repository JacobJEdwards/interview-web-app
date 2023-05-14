import { Outlet, useLoaderData, Link } from "@remix-run/react";
import { Role, Module as ModuleType } from "server/types/generated/client";
import Sidebar from "~/components/Sidebar";
import { type LoaderArgs, json } from "@remix-run/node";
import { getUser, requireUser } from "~/utils/session.server";
import { getTeacherModules, getUserModules } from "~/utils/modules.server";

export async function loader({ request }: LoaderArgs) {
    await requireUser(request);

    const user = await getUser(request);
    let modules;

    if (user?.role === Role.TEACHER) {
        modules = await getTeacherModules(request);
    } else {
        modules = await getUserModules(request);
    }

    return json({ modules, user });
}

export default function Dashboard() {
    const { modules } = useLoaderData<typeof loader>();
    return (
        <div className="flex flex-row bg-base-100 h-screen">
            <Sidebar modules={modules} />
            <div className="p-10 w-full h-full max-h-none">
                <Link to="/logout" className="btn btn-primary right-2 absolute top-2">
                    Logout
                </Link>
                <Outlet />
            </div>
        </div>
    );
}

export function ErrorBoundary({ error }: { error: Error }) {
    <main>
        <h1>Whoops</h1>
        <p>There was an error</p>
        <pre>{error.message}</pre>
    </main>;
}
