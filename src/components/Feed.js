import React from "react";
import { useQuery } from "@apollo/client";
import FeedItem from "./FeedItem";
import FeedPostForm from "./FeedPostForm";
import { GET_MY_FEED } from "../queries/feeds";
import Loading from "./Loading";

const Feed = () => {

    const {loading, error, data, refetch} = useQuery(GET_MY_FEED);
    if (loading) return <Loading />
    if (error) {
        console.log("error", error);
        return `Something went wrong! ${error.message}`
    };
    const feed = data.getMyFeed;

    return (
        <div className="Feed">
            <h2 className="mb-3">My Feed</h2>
            <FeedPostForm refetch={refetch}/>
            {
                feed.length === 0 ? 
                <p>Wow. Such empty :( Post something!</p> : 
                feed.map(post => (
                    <FeedItem 
                        key={post.id}
                        content={post.content}
                        username={post.user.username}
                        createdAt={post.createdAt}
                    />
                ))
            }
        </div>
    )
};

export default Feed;