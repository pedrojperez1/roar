import React from "react";
import { Media } from "reactstrap";
import dayjs from "dayjs";
import "./FeedItem.css";

const FeedItem = ({type, content, username, createdAt}) => {
    
    const genTimeAgo = (unixString) => {
        const created = dayjs.unix(Number(unixString) / 1000);
        const dateDiffSeconds = dayjs().diff(created, "second");
        if (dateDiffSeconds > (60 * 60 * 24 * 30)) {
            const diff = Math.floor(dateDiffSeconds / (60 * 60 * 24 * 30));
            return `${diff} month${diff !== 1 ? 's' : ''} ago`
        }
        if (dateDiffSeconds > (60 * 60 * 24)) {
            const diff = Math.floor(dateDiffSeconds / (60 * 60 * 24));
            return `${diff} day${diff !== 1 ? 's' : ''} ago`
        }
        if (dateDiffSeconds > (60 * 60)) {
            const diff = Math.floor(dateDiffSeconds / (60 * 60));
            return `${diff} hour${diff !== 1 ? 's' : ''} ago`
        }
        if (dateDiffSeconds > (60)) {
            const diff = Math.floor(dateDiffSeconds / 60);
            return `${diff} min${diff !== 1 ? 's' : ''} ago`
        }
        return `${dateDiffSeconds} seconds ago`
    }


    return ( type === "user" ?
        <div className="FeedItem text-left border rounded my-2 p-3">
            <Media>
                <Media left className="mr-3">
                    <img className="img-thumbnail rounded-circle" src="https://i.pinimg.com/736x/be/6c/11/be6c1171376d578fbd11e7bb4a540630.jpg" alt="profile"></img>
                </Media>
                <Media body>
                    <span className="mr-2"><b>{username}</b></span>
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

