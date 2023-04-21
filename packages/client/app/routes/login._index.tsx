import React from "react";
import { Link } from "@remix-run/react";
import { Outlet } from "@remix-run/react";

const Login = () => {
  return (
    <div>
      <h1>Login as</h1>
      <Link to="student">Student</Link>
      <Link to="teacher">Teacher</Link>
      <Outlet />
    </div>
  );
};

export default Login;
