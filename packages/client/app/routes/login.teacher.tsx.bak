import { teacherLogin } from "~/utils/session.server";
import { LoaderArgs, ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";

const TeacherLogin = () => {
    return (
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700">
                    Teacher Login
                </h1>
                <Form className="space-y-4" method="POST">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input
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

export default TeacherLogin;
