import { useQuery } from "@apollo/client";
import React from "react";
import { FETCH_MY_PROFILE_QUERY } from "../queries/users";
import Loading from "./Loading";

const ProfilePreviewDropdown = () => {
    const {loading, error, data} = useQuery(FETCH_MY_PROFILE_QUERY);
    if (loading) return <Loading />;
    if (error) return `Error fetching profile.`;
    return (
        <div className="ProfilePreviewDropdown">
            <p>{data.getMyProfile.firstName} {data.getMyProfile.lastName}</p>
            <p className="font-weight-light">{data.getMyProfile.email}</p>
        </div>
    )
};

export default ProfilePreviewDropdown;