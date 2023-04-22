import { getUserId, getUser, requireUser } from "../utils/session.server";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Role } from "server/types/generated/client";
import type { UserSessionData } from "../utils/session.server";
import { redirect } from "@remix-run/node";

export async function loader({ request }: LoaderArgs) {
  await requireUser(request);
  return null;
}

export default function Dashboard() {
  return <div></div>;
}
