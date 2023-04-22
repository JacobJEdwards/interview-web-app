import { Form } from "@remix-run/react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { useActionData, useSearchParams } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { createUserSession, login } from "~/utils/session.server";
import { getUserId } from "~/utils/session.server";

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

    const { userId, userRole, userName } = await login({ email, password });

    if (userId) {
        return createUserSession(userId, userRole, userName, redirectTo);
    } else {
        return redirect("/login");
    }
};

const StudentLogin = () => {
    // to implement errors
    const actionData = useActionData<typeof action>();
    const [searchParams] = useSearchParams();
    return (
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700">
                    Login
                </h1>
                <Form className="space-y-4" method="POST">
                    <input
                        type="hidden"
                        name="redirectTo"
                        value={searchParams.get("redirectTo") ?? undefined}
                    />
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="text"
                            placeholder="Email Address"
                            className="w-full input input-bordered input-primary"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            className="w-full input input-bordered input-primary"
                        />
                    </div>
                    <div>
                        <button className="btn btn-block btn-primary">Login</button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default StudentLogin;
