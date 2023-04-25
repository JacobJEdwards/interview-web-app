import { redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";

export const loader = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(redirect("/"));
    }, 3000);
  });
};

export default function UnmatchedRoutes() {
  return (
    <div>
      <h1>404</h1>
      <p>Redirecting to home page...</p>
    </div>
  );
}
