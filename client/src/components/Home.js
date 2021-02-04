import React from "react";
import { Button, Col, Container, Row, Card, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import { FETCH_MY_PROFILE_QUERY } from "../queries/users";
import Statistics from "./Statistics";
import Following from "./Following";
import Achievements from "./Achievements";
import { useQuery } from "@apollo/client";
import Loading from "./Loading";
import genJoinDate from "../helpers/genJoinDate";

const Home = () => {    
    const { loading, error, data } = useQuery(FETCH_MY_PROFILE_QUERY);
    if (loading) return <Loading />;
    if (error) {
        return `Something bad happened. ${error}`
    }
    return (
        <div className="Home">
            <Container className="pt-3 mb-5">
                <Row>
                    <Col xs={12} sm={12} md={8} className="p-2 vh-100 d-inline-block">

                        <Row><h1>{data.getMyProfile.username}</h1></Row>
                        <Row><p>Joined {genJoinDate(data.getMyProfile.createdAt)}</p></Row>

                        <Row className="my-3">
                            <Statistics ladders={data.getMyProfile.ladders}/>
                        </Row>
                        <Row className="my-3">
                            <Achievements />
                        </Row>
                        <Row className="my-3">
                            <Following following={data.getMyProfile.following}/>
                        </Row>
                    </Col>
                    <Col>
                        <Row className="pt-4 px-4">
                            <Card body className="text-center">
                                <CardText className="lead">Are you ready to create a new Fear Mountain?</CardText>
                                <Button color="primary"><Link to="/newladder">Create new Fear Mountain</Link></Button>
                            </Card>
                        </Row>
                        <Row className="my-3 px-4">
                            <Card body className="text-center">
                                <CardText className="lead">Check out how you are progressing on your Fear Ladders!</CardText>
                                <Button color="primary"><Link to="/ladders">Go to My Ladders</Link></Button>
                            </Card>
                        </Row>
                        <Row className="my-3 px-4">
                            <Card body className="text-center">
                                <CardText className="lead">Other people are facing their fears too. Browse around and join the conversation!</CardText>
                                <Button color="primary">Start browsing</Button>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Home;