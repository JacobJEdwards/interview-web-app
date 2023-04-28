import { Outlet } from "@remix-run/react";
import { Module as ModuleType } from "server/types/generated/client";
import Module from "~/components/Module";
import { Link } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUser, requireUser } from "~/utils/session.server";
import { getTeacherModules, getUserModules } from "~/utils/modules.server";
import { Role } from "server/types/generated/client";

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
  const { modules, user } = useLoaderData();
  return (
    <div className="drawer drawer-mobile bg-base-100">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-10">
        <Link to="/logout" className="btn btn-primary right-2 absolute top-2">
          Logout
        </Link>
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <nav className="drawer-side bg-base-200 pt-10">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-55 text-base-content">
          <li className="mb-4">
            <Link
              className="text-center border border-slate-700"
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <div className="divider"></div>
          {modules &&
            modules.map((module: ModuleType) => (
              <li key={module.id} className="mb-4">
                <Module {...module} />
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
