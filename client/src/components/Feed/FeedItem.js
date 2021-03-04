import React from "react";
import genTimeAgo from "../../helpers/genTimeAgo";
import { Avatar, Box, Flex, Stack, Text } from "@chakra-ui/react";

const FeedItem = ({type, content, username, profileImage, createdAt}) => {

    return ( type === "user" ?
        <div className="FeedItem">
            <Flex>
                <Avatar src={profileImage} size="md" mr={3}/>
                <Box>
                    <Stack>
                        <Text><b>{username}</b> {content}</Text>
                        <Text fontStyle="italic">{genTimeAgo(createdAt)}</Text>
                    </Stack>
                </Box>
            </Flex>

        </div> :
        <div className="FeedItem">
            <Text>
                <b>{username}</b> <Text fontStyle="italic">{content} {genTimeAgo(createdAt)}</Text>
            </Text>
        </div> 
    )
};

export default FeedItem;

