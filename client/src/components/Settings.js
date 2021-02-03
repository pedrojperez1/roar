import { useQuery } from "@apollo/client";
import React from "react";
import { Button, Container, Row } from "reactstrap";
import { FETCH_MY_PROFILE_QUERY } from "../queries/users";
import Loading from "./Loading";
import "./Settings.css";

const Settings = () => {
    const { loading, error, data } = useQuery(FETCH_MY_PROFILE_QUERY);
    if (loading) return <Loading />;
    if (error) {
        return `Something bad happened. ${error}`
    }
    return (
        <div className="Profile">
            <Container>
                <Row className="justify-content-center">
                    <img className="mb-3" src={data.getMyProfile.profileImage} style={{width: "200px", height: "auto"}} alt="profile"></img>
                </Row>
                <Row className="justify-content-center">
                    <Button className="mb-3">Edit Profile</Button>
                </Row>
                <Row className="justify-content-center">
                    <h3>{data.getMyProfile.username}</h3>
                </Row>

            </Container>
        </div>
    )
};

export default Settings;