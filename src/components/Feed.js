import React from "react";
import { useQuery } from "@apollo/client";
import FeedItem from "./FeedItem";
import FeedPostForm from "./FeedPostForm";
import { FETCH_FEED_ITEMS } from "../queries/users";

const Feed = ({username}) => {

    // const allFeeds = useQuery(FETCH_FEED_ITEMS, {
    //     variables: {username: username}
    // });
    // const feed = allFeeds.filter(f => f.userId === userId);

    return (
        <div className="Feed">
            {/* <h2 className="mb-3">My Feed</h2>
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
            } */}
        </div>
    )
};

export default Feed;