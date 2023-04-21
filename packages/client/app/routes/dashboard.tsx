import { getUserId } from "../utils/session.server";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderArgs) {
    const { userId, userType } = await getUserId(request);
    console.log(userId, userType);
    return { userId, userType };
}

export default function Dashboard() {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}
