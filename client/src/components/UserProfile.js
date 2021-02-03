import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { FETCH_PROFILE } from "../queries/users";
import Loading from "./Loading";

const UserProfile = () => {
    const {username} = useParams();
    const {loading, error, data} = useQuery(FETCH_PROFILE, {
        variables: {username: username}
    });
    if (loading) return <Loading />
    if (error) {
        return `Something bad happened. ${error}`
    }
    const profile = data.fetchProfile;
    return (
        <div className="UserProfile">
            <h1>{profile.username}</h1>
            <img src={profile.profileImage} alt="profile" style={{width: "200px"}}/>
            <p>Joined: {profile.createdAt}</p>
            <p>Following: {profile.following.length}</p>
            <p>Followers: {profile.followers.length}</p>
        </div>
    )
};

export default UserProfile;