import type { V2_MetaFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUser } from "../utils/session.server";
import type { LoaderArgs } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const user = await getUser(request);
  if (!user) {
    return redirect("/login");
  }

  return redirect("/dashboard");
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "Home" }];
};

export default function Index() {
  useLoaderData();
}
