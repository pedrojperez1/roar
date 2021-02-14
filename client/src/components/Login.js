import React from "react";
import LoginForm from "./LoginForm";
import LoginFormik from "./LoginFormik";

const Login = ({setUser}) => {
    return (
        <div className="Login">
            {/* <LoginForm setUser={setUser}/> */}
            <LoginFormik />
        </div>
    )
};

export default Login;