import React from "react";
import LoginForm from "./LoginForm";

const Login = ({setUser}) => {
    return (
        <div className="Login">
            <LoginForm setUser={setUser}/>
        </div>
    )
};

export default Login;