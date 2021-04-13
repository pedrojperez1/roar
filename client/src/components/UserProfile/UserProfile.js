import { useMutation } from "@apollo/client";
import React from "react";
import {
    FOLLOW_USER_MUTATION, 
    UNFOLLOW_USER_MUTATION 
} from "../../queries/users";
import { MdHistory, MdPeopleOutline } from "react-icons/md";
import Achievements from "../Achievements/Achievements";
import Feed from "../Feed/Feed";
import dayjs from "dayjs";
import { Avatar, Box, Button, Center, Heading, HStack, Stack, Text } from "@chakra-ui/react";

const UserProfile = ({profile, myProfile, refetchAll}) => {
    
    const [follow] = useMutation(FOLLOW_USER_MUTATION, {
        variables: { username: profile.username },
        onCompleted: () => refetchAll()
    });
    const [unfollow] = useMutation(UNFOLLOW_USER_MUTATION, {
        variables: { username: profile.username },
        onCompleted: () => refetchAll()
    });
    
    const myFollowing = myProfile.following.map(user => user.username);    

    return (
        <div className="UserProfile">
            <Stack spacing={10}>
                <Box>
                    <Center>
                        <Avatar size="2xl" src={profile.profileImage} />
                    </Center>
                    <Center>
                        <Heading>{profile.username}</Heading>
                    </Center>
                    <Center>
                        <HStack>
                            <MdHistory />
                            <Text>Joined {dayjs.unix(profile.createdAt / 1000).format("MMM YYYY")}</Text>
                        </HStack>
                    </Center>
                    <Center>
                        <HStack>
                            <MdPeopleOutline />
                            <Text><b>{profile.followers.length}</b> followers</Text>
                            <Text> | </Text>
                            <Text><b>{profile.following.length}</b> following</Text>
                        </HStack>
                    </Center>
                    <Center mt={1}>
                        {
                            profile.username !== myProfile.username ?
                            (
                                myFollowing.includes(profile.username) ?
                                <Button variant="outline" size="sm" onClick={unfollow}>Unfollow</Button> :
                                <Button variant="outline" size="sm" onClick={follow}>Follow</Button>
                            ) :
                            <Button outline size="sm">Edit Profile</Button>
                        }
                    </Center>
                </Box>
                <Box>
                    <Achievements username={profile.username} />
                </Box>
                <Box>
                    <Feed feed={profile.feed} myFeed={profile.username === myProfile.username} refetch={refetchAll}/>
                </Box>
            </Stack>
        </div>
    )
};

export default UserProfile;