import { Outlet, useLoaderData, Link } from "@remix-run/react";
import { Role, Module as ModuleType } from "server/types/generated/client";
import Sidebar from "~/components/Sidebar";
import { Module } from "~/components";
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
      <Sidebar modules={modules} />
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
