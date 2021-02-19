import React from "react";
import { useQuery } from "@apollo/client";
import FeedItem from "./FeedItem";
import FeedPostForm from "./FeedPostForm";
import { GET_USER_FEED } from "../queries/feeds";
import Loading from "./Loading";
import { Button, Flex, Heading, Spacer, Stack, Text, useDisclosure } from "@chakra-ui/react";

const Feed = ({username, myFeed}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {loading, error, data, refetch} = useQuery(GET_USER_FEED, {
        variables: {username: username}
    });
    if (loading) return <Loading />
    if (error) {
        return `Something went wrong! ${error.message}`
    }
    const feed = data.getUserFeed;

    const sortedFeed = [...feed].sort((a, b) => Number(b.createdAt) - Number(a.createdAt)); // sort feed by time posted
    return (
        <div className="Feed">
            <FeedPostForm
                isOpen={isOpen}
                onClose={onClose}
                refetch={refetch}
                initCharLength={0}
            />
            <Stack>
                <Heading
                    fontSize="24px"
                    style={{ borderBottom: "1px solid rgb(226, 232, 240)", textAlign: "left" }}
                    mb="6"
                    pb="10px"
                >
                    <Flex>
                        <Text>Recent Activity</Text>
                        <Spacer />
                        { 
                            myFeed && 
                            <Button 
                                variant="outline" 
                                size="sm"
                                onClick={onOpen}
                            >
                                Post Update
                            </Button> }
                    </Flex>
                </Heading>
                <Stack>
                    {
                        feed.length === 0 ? 
                        <Text>No activity... yet!</Text> : 
                        sortedFeed.map(post => (
                            <FeedItem
                                key={post.id}
                                type={post.type}
                                content={post.content}
                                username={post.user.username}
                                profileImage={post.user.profileImage}
                                createdAt={post.createdAt}
                            />
                        ))
                    }
                </Stack>
            </Stack>
            
            

            
        </div>
    )
};

export default Feed;