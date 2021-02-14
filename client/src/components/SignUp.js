import React from "react";
import SignUpForm from "./SignUpForm";
import SignUpFormik from "./SignUpFormik";

const SignUp = ({setUser}) => {
    return (
        <div className="SignUp">
            <SignUpFormik setUser={setUser}/>
        </div>
    )
};

export default SignUp;