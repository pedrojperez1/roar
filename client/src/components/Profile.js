import { useQuery } from "@apollo/client";
import React from "react";
import { FETCH_MY_PROFILE_QUERY } from "../queries/users";
import Loading from "./Loading";

const Profile = () => {
    const { loading, error, data } = useQuery(FETCH_MY_PROFILE_QUERY);
    if (loading) return <Loading />;
    if (error) {
        return `Something bad happened. ${error}`
    }

    return (
        <div className="Profile">
            <p>Name: {data.getMyProfile.firstName} {data.getMyProfile.lastName}</p>
            <p>Email: {data.getMyProfile.email}</p>
        </div>
    )
};

export default Profile;