import React from "react";
import { Media } from "reactstrap";
import "./FeedItem.css";

const FeedItem = ({username, content}) => {
    return (
        <div className="FeedItem text-left border rounded my-2 p-3">
            <Media>
                <Media left className="mr-3">
                    <img className="img-thumbnail rounded-circle" src="https://i.pinimg.com/736x/be/6c/11/be6c1171376d578fbd11e7bb4a540630.jpg" alt="profile"></img>
                </Media>
                <Media body>
                    <span className="mr-2"><b>{username}</b></span>
                    {content}<br/>
                    <span className="text-muted font-weight-light font-italic">Posted 3 hours ago</span>
                </Media>
            </Media>
        </div>
    )
};

export default FeedItem;

