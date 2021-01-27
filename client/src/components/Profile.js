import { useQuery } from "@apollo/client";
import React from "react";
import { Button, Container, Row } from "reactstrap";
import { FETCH_MY_PROFILE_QUERY } from "../queries/users";
import Loading from "./Loading";
import "./Profile.css";

const Profile = () => {
    const { loading, error, data } = useQuery(FETCH_MY_PROFILE_QUERY);
    if (loading) return <Loading />;
    if (error) {
        return `Something bad happened. ${error}`
    }

    return (
        <div className="Profile">
            <Container>
                <Row className="justify-content-center">
                    <img className="mb-3" src={data.getMyProfile.profileImage} alt="profile"></img>
                </Row>
                <Row className="justify-content-center">
                    <Button className="mb-3">Edit Profile</Button>
                </Row>
                <Row className="justify-content-center">
                    <h3>{data.getMyProfile.firstName} {data.getMyProfile.lastName}</h3>
                </Row>
                <Row className="justify-content-center">
                    <blockquote className="blockquote">{data.getMyProfile.email}</blockquote>
                </Row>

            </Container>
        </div>
    )
};

export default Profile;