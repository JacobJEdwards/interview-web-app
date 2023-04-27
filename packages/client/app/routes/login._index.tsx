import { Form } from "@remix-run/react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { useActionData, useSearchParams } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { createUserSession, login } from "~/utils/session.server";
import { getUserId } from "~/utils/session.server";
import { json } from "@remix-run/node";
import { badRequest } from "~/utils/request.server";

const validateUrl = (url: string) => {
    const urls = ["/dashboard", "/profile", "/settings"];
    if (urls.includes(url)) {
        return url;
    }
    return "/dashboard";
};

export const loader = async ({ request }: LoaderArgs) => {
    // to check if user if logged in -> logout
    const { userId } = await getUserId(request);
    if (userId) {
        return redirect("/dashboard");
    } else {
        return null;
    }
};

export const action = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const redirectTo = validateUrl(
        (formData.get("redirectTo") as string) || "/dashboard"
    );

    const user = await login({ email, password });

    if (!user) {
        const values = Object.fromEntries(formData.entries());
        return json({ values, message: "Invalid email or password" });
    }

    const { userId, userRole, userName } = user;

    if (userId) {
        return createUserSession(userId, userRole, userName, redirectTo);
    } else {
        const values = Object.fromEntries(formData.entries());
        return json({ values, message: "Invalid email or password" });
    }
};

const Login = () => {
    // to implement errors
    const actionData = useActionData<typeof action>();
    const [searchParams] = useSearchParams();
    return (
        <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
            <div className="w-full p-6 bg-white border-t-4 border-gray-600  rounded-md shadow-md border-top lg:max-w-lg">
                <h1 className="test-3xl font-semibold text-center text-gray-700">
                    Login
                </h1>
                <Form method="POST" reloadDocument className="space-y-4">
                    <input
                        type="hidden"
                        name="redirectTo"
                        value={searchParams.get("redirectTo") ?? undefined}
                    />
                    <div>
                        <label className="label" htmlFor="email">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="text"
                            placeholder="Email Address"
                            defaultValue={actionData?.values.email}
                            className="w-full input input-bordered"
                        />
                    </div>
                    <div>
                        <label className="label" htmlFor="password">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            defaultValue={actionData?.values.password}
                            className="w-full input input-bordered"
                        />
                    </div>
                    <div>
                        <button className="btn btn-block">Login</button>
                    </div>
                    {actionData?.message && (
                        <div>
                            <div>
                                <label>
                                    <span>{actionData.message}</span>
                                </label>
                            </div>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default Login;
