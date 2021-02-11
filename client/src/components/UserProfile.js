import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { FETCH_MY_PROFILE_QUERY, FETCH_PROFILE, FOLLOW_USER_MUTATION, UNFOLLOW_USER_MUTATION } from "../queries/users";
import Loading from "./Loading";
import {MdHistory, MdPeopleOutline} from "react-icons/md";
import Achievements from "./Achievements";
import Feed from "./Feed";
import dayjs from "dayjs";

const UserProfile = () => {
    const {username} = useParams();
    const {loading, error, data, refetch} = useQuery(FETCH_PROFILE, {
        variables: {username: username}
    });
    const {loading: loadingMe, error: errorMe, data: dataMe, refetch: refetchMe} = useQuery(FETCH_MY_PROFILE_QUERY);
    
    const [follow] = useMutation(FOLLOW_USER_MUTATION, {
        variables: { username: username },
        onCompleted: () => {
            refetch();
            refetchMe();
        }
    });
    const [unfollow] = useMutation(UNFOLLOW_USER_MUTATION, {
        variables: { username: username },
        onCompleted: () => {
            refetch();
            refetchMe();
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
            <Container>
                <Row>
                    <Col xs={12} sm={11} md={5} lg={4} xl={3}>
                        <Row>
                            <img className="rounded-circle" src={profile.profileImage} alt="profile" style={{width: "150px"}}/>
                        </Row>
                        <Row>
                            <p className="blockquote font-weight-bold mt-2">{profile.username}</p>
                        </Row>
                        <Row>
                            <p>
                                <span className="mr-2"><MdPeopleOutline /></span>
                                <b>{profile.followers.length}</b> followers  |  <b>{profile.following.length}</b> following
                            </p>
                        </Row>
                        <Row><p><span className="mr-2"><MdHistory /></span>Joined {dayjs.unix(profile.createdAt / 1000).format("MMM YYYY")}</p></Row>
                        <Row>
                            {
                                profile.username !== myProfile.username ?
                                (
                                    myFollowing.includes(profile.username) ?
                                    <Button outline size="sm" onClick={unfollow}>Unfollow</Button> :
                                    <Button outline size="sm" onClick={follow}>Follow</Button>
                                ) :
                                <Button outline size="sm">Edit Profile</Button>
                            }
                            
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <Row className="mb-3">
                            <Achievements username={username}/>
                        </Row>
                        <Row>
                            <Feed username={username} myFeed={profile.username === myProfile.username}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
};

export default UserProfile;