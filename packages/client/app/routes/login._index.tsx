import { Form } from "@remix-run/react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { useActionData, useSearchParams } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { createUserSession, login, getUserId } from "~/utils/session.server";
import { json } from "@remix-run/node";

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
  const actionData = useActionData<typeof action>();
  const [searchParams] = useSearchParams();
  return (
    <main>
      <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
        <h1 className="text-3xl font-semibold mb-4">
          Project Management System
        </h1>
        <div className="w-full p-6 bg-base-300 border-t-4 border-gray-600  rounded-md shadow-md border-top lg:max-w-lg">
          <h2 className="text-2xl font-semibold text-center">Login</h2>
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
              <div className="alert alert-error shadow-lg">
                <div>
                  <span>{actionData.message}</span>
                </div>
              </div>
            )}
          </Form>
        </div>
      </div>
    </main>
  );
};

export default Login;
