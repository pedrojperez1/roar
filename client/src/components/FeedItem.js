import React from "react";
import { Media } from "reactstrap";
import genTimeAgo from "../helpers/genTimeAgo";
import "./FeedItem.css";

const FeedItem = ({type, content, username, profileImage, createdAt}) => {

    return ( type === "user" ?
        <div className="FeedItem text-left border rounded my-2 p-3">
            <Media>
                <Media left className="mr-3">
                    <img className="img-thumbnail rounded-circle" src={profileImage} alt="profile"></img>
                </Media>
                <Media body>
                    <span className="mr-2"><b>{`${username}`}</b></span>
                    {content}<br/>
                    <span className="text-muted font-weight-light font-italic">Posted {genTimeAgo(createdAt)}</span>
                </Media>
            </Media>
        </div> :
        <div className="FeedItem my-5">
            <p><b>{username}</b> <span className="font-italic">{content} {genTimeAgo(createdAt)}</span></p>
        </div> 
    )
};

export default FeedItem;

