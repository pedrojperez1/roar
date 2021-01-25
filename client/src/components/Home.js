import React, { useContext } from "react";
import { Button, Col, Container, Row, Card, CardText } from "reactstrap";
import Feed from "./Feed";
import { Link } from "react-router-dom";
import "./Home.css";
import CurrentUserContext from "../helpers/CurrentUserContext";

const Home = () => {
    const {currentUser} = useContext(CurrentUserContext);
    if (!currentUser) {
        return <h3>Please log in first.</h3>
    }
    return (
        <div className="Home">
            <Container className="pt-3">
                <Row>
                    <Col xs={12} sm={12} md={8}>
                        <Container className="p-2 vh-100 d-inline-block">
                            <Feed />
                        </Container>
                    </Col>
                    <Col>
                        <Row>
                            <Container className="p-2">
                            <Card body className="text-center">
                                <CardText className="lead">Check out how you are progressing on your Fear Ladders!</CardText>
                                <Button><Link to="/ladders">Go to My Ladders</Link></Button>
                            </Card>
                            </Container>
                        </Row>
                        <Row>
                            <Container className="p-2">
                            <Card body className="text-center">
                                <CardText className="lead">Other people are dealing with the same fears you are. Look around on the message boards and join the conversation!</CardText>
                                <Button>Start browsing</Button>
                            </Card>
                            </Container>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Home;