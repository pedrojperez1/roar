import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { 
    FETCH_MY_PROFILE_QUERY, 
    FETCH_PROFILE, 
    FOLLOW_USER_MUTATION, 
    UNFOLLOW_USER_MUTATION 
} from "../../queries/users";
import Loading from "../Loading/Loading";
import {MdHistory, MdPeopleOutline} from "react-icons/md";
import Achievements from "../Achievements/Achievements";
import Feed from "../Feed/Feed";
import dayjs from "dayjs";
import { Avatar, Box, Button, Center, Heading, HStack, Stack, Text } from "@chakra-ui/react";

const UserProfile = ({username, refetchFollows}) => {
    const {loading, error, data, refetch} = useQuery(FETCH_PROFILE, {
        variables: {username: username}
    });
    const {loading: loadingMe, error: errorMe, data: dataMe, refetch: refetchMe} = useQuery(FETCH_MY_PROFILE_QUERY);
    
    const [follow] = useMutation(FOLLOW_USER_MUTATION, {
        variables: { username: username },
        onCompleted: () => {
            refetch()
            refetchMe()
            if (profile.username === myProfile.username) refetchFollows()
        }
    });
    const [unfollow] = useMutation(UNFOLLOW_USER_MUTATION, {
        variables: { username: username },
        onCompleted: () => {
            refetch()
            refetchMe()
            refetchFollows()
        }
    });
    
    if (loading || loadingMe) return <Loading />
    if (error || errorMe) {
        return `Something bad happened. ${error}`
    }
    const profile = data.fetchProfile;
    const myProfile = dataMe.getMyProfile;
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
                    <Feed username={username} myFeed={profile.username === myProfile.username}/>
                </Box>
            </Stack>
        </div>
    )
};

export default UserProfile;