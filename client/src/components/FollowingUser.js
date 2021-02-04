import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const FollowingUser = ({ username, profileImage }) => {
    return (
        <div className="FollowingUser">
            <Link to={`/u/${username}`}>
                <Card style={{"border": "none"}}>
                    <CardBody>
                        <img className="img-thumbnail rounded-circle mr-2" width="64px" src={profileImage} alt="profile"></img>
                        <p>{username}</p>
                    </CardBody>
                </Card>
            </Link>
        </div>
    )
}

export default FollowingUser