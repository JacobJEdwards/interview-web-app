import { getUser, requireUser } from "../utils/session.server";
import { getUserModules } from "../utils/modules.service";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Role, type Module as ModuleType } from "server/types/generated/client";

import Module from "../components/Module";

export async function loader({ request }: LoaderArgs) {
    await requireUser(request);

    const modules = await getUserModules(request);
    const user = await getUser(request);

    return { modules, user };
}

export default function Dashboard() {
    const { modules, user } = useLoaderData<typeof loader>();

    return (
        <div>
            <h1>{user?.role === Role.STUDENT ? "Student" : "Teacher"} Dashboard</h1>
            {modules ? (
                <ul>
                    {modules.map((module: ModuleType) => (
                        <li key={module.id}>
                            <Module
                                key={module.id}
                                name={module.name}
                                id={module.id}
                                teacherId={module.teacherId}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No modules found</p>
            )}
        </div>
    );
}
