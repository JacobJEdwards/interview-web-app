import { Form } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { studentLogin } from "~/utils/session.server";

export const action = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const userId = await studentLogin({ email, password });

    if (userId) {
        return redirect("/student/dashboard");
    } else {
        return redirect("/login/student");
    }
};

const StudentLogin = () => {
    return (
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700">
                    Student Login
                </h1>
                <Form className="space-y-4" method="POST">
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
