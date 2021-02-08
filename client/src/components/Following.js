import React from "react";
import { CardDeck, Row } from "reactstrap";
import FollowingUser from "./FollowingUser";

const Following = ({ following }) => {
    return (
        <div className="Following">
            <Row>
                <h1 className="font-weight-light">Following</h1>
            </Row>
            {
                following.length === 0 ?
                <p>No follows... yet.</p> :
                <Row>
                    <CardDeck>
                        {following.map(f => (
                            <FollowingUser 
                                key={f.username} 
                                username={f.username} 
                                profileImage={f.profileImage} 
                            />
                            )
                        )}
                    </CardDeck>
                </Row>
            }
        </div>
    )
};

export default Following;