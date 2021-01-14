import React from "react";
import { useSelector } from "react-redux";
import FeedItem from "./FeedItem";
import FeedPostForm from "./FeedPostForm";

const Feed = ({userId}) => {
    const currentUsername = useSelector(store => store.users.users[userId].username);
    const allFeeds = useSelector(store => store.feeds);
    const feed = allFeeds.filter(f => f.userId === userId);

    return (
        <div className="Feed">
            <h2 className="mb-3">My Feed</h2>
            <FeedPostForm />
            {
                feed.length === 0 ? 
                <p>Wow. Such empty :( Post something!</p> : 
                feed.map(f => (
                    <FeedItem 
                        key={f.post.id} 
                        username={currentUsername} 
                        content={f.post.content} 
                    />
                ))
            }
        </div>
    )
};

export default Feed;