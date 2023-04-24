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
      <ul>
        {modules
          ? modules.map((module: ModuleType) => (
              <Module key={module.id} id={module.id} name={module.name} />
            ))
          : "No modules"}
      </ul>
    </div>
  );
}
