import type {
  V2_MetaFunction,
  LoaderFunction,
  LoaderArgs
} from "@remix-run/node";
import {redirect} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {getUserId} from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const { userId } = await getUserId(request);

  if (!userId) {
    return redirect("/login");
  } else {
    return redirect("/dashboard");
  }
};

export const meta: V2_MetaFunction = () => {
  return [{ title: "Home" }];
};

export default function Index() {
  useLoaderData<typeof loader>();
}
