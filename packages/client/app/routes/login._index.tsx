import { Link } from "@remix-run/react";

const Login = () => {
    return (
        <div className="flex">
            <h1>Login</h1>
            <div className="flex flex-col">
                <Link to="student">Student</Link>
                <Link to="teacher">Teacher</Link>
            </div>
        </div>
    );
};

export default Login;
