import {
  getUserId,
  getUser,
  getUserModules,
  requireUser,
} from "../utils/session.server";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Role } from "server/types/generated/client";
import type { UserSessionData } from "../utils/session.server";
import { redirect } from "@remix-run/node";

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
        {modules.map((module) => (
          <Module key={module.id} id={module.id} name={module.name} />
        ))}
      </ul>
    </div>
  );
}
