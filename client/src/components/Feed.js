import React from "react";
import { useQuery } from "@apollo/client";
import FeedItem from "./FeedItem";
import FeedPostForm from "./FeedPostForm";
import { GET_USER_FEED } from "../queries/feeds";
import Loading from "./Loading";
import { Row } from "reactstrap";

const Feed = ({username}) => {

    const {loading, error, data, refetch} = useQuery(GET_USER_FEED, {
        variables: {username: username}
    });
    if (loading) return <Loading />
    if (error) {
        return `Something went wrong! ${error.message}`
    }
    const feed = data.getMyFeed;

    const sortedFeed = [...feed].sort((a, b) => Number(b.createdAt) - Number(a.createdAt)); // sort feed by time posted
    return (
        <div className="Feed">
            <Row>
                <h1>User Activity</h1>
            </Row>
            {/* <Row>
                <FeedPostForm refetch={refetch}/>
            </Row> */}

            {
                feed.length === 0 ? 
                <p>No posts yet!</p> : 
                sortedFeed.map(post => (
                    <Row>
                        <FeedItem 
                            key={post.id}
                            type={post.type}
                            content={post.content}
                            username={post.user.username}
                            profileImage={post.user.profileImage}
                            createdAt={post.createdAt}
                        />
                    </Row>
                ))
            }
        </div>
    )
};

export default Feed;