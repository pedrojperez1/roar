import React from "react";
import SignUpForm from "./SignUpForm";

const SignUp = ({setUser}) => {
    return (
        <div className="SignUp">
            <SignUpForm setUser={setUser}/>
        </div>
    )
};

export default SignUp;