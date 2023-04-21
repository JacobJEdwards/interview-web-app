import { logout } from "../utils/session.server";
import type { LoaderArgs } from "@remix-run/node";

export function loader({ request }: LoaderArgs) {
  return logout(request);
}
