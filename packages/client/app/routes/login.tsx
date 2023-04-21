import React from "react";
import { Link } from "@remix-run/react";

const Login = () => {
  return (
    <div>
      <h1>Login as</h1>
      <Link to="/login/student">Student</Link>
      <Link to="/login/teacher">Teacher</Link>
    </div>
  );
};

export default Login;
