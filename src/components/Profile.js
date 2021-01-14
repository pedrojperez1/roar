import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
    const users = useSelector(store => store.users);
    const currentUser = users.users[users.currentUser];
    if (!currentUser) {
        return <Redirect to="/login" />
    }
    return (
        <div className="Profile">
            <p>username: {currentUser.username}</p>
            <p>email: {currentUser.email}</p>
        </div>
    )
};

export default Profile;