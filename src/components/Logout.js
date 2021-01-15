import React from "react";
import { useApolloClient } from "@apollo/client";
import { Redirect } from "react-router-dom";

const Logout = () => {
    // clear localstorage
    localStorage.removeItem("roarCurrentUser");
    // clear Apollo store
    const client = useApolloClient();
    client.clearStore();

    return (
        <Redirect to="/" />
    )
};

export default Logout;