import { getUser, requireUser } from "../utils/session.server";
import { getUserModules, getTeacherModules } from "../utils/modules.service";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Role, type Module as ModuleType } from "server/types/generated/client";

import Module from "../components/Module";

export async function loader({ request }: LoaderArgs) {
  await requireUser(request);

  const user = await getUser(request);

  if (user?.role === Role.TEACHER) {
    const modules = await getTeacherModules(request);
    return { modules, user };
  }

  const modules = await getUserModules(request);

  return { modules, user };
}

export default function Dashboard() {
  const { modules, user } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-3xl">
        {user?.role === Role.STUDENT ? "Student" : "Teacher"} Dashboard
      </h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
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
    </div>
  );
}
