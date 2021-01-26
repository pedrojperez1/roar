import React from "react";
import { Button, Jumbotron, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { ImPencil2, ImClipboard, ImRocket} from "react-icons/im";

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <Jumbotron>
                <Container fluid>
                    <Row className="text-right justify-content-end">
                        <Col className="col-5 align-self-end">
                            <h1 className="display-2">Hello, world!</h1>
                            <p className="lead">Roar is a tool to help you overcome your fears in a safe and supervised environment.</p>
                            <p className="lead">
                            <Button color="primary"><Link to="/learn">Learn More</Link></Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Row>
                <Col>
                    <h3 className="mb-5">We put the power of exposure therapy at your fingertips.</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row className="mb-5"><Col><h1 className="display-1"><ImPencil2 /></h1></Col></Row>
                    <Row><Col><p className="blockquote">Build your plan</p></Col></Row>
                </Col>
                <Col>
                    <Row className="mb-5"><Col><h1 className="display-1"><ImClipboard /></h1></Col></Row>
                    <Row><Col><p className="blockquote">Complete assignments</p></Col></Row>
                </Col>
                <Col>
                <Row className="mb-5"><Col><h1 className="display-1"><ImRocket /></h1></Col></Row>
                    <Row className="mb-5"><Col><p className="blockquote">Conquer your fear!</p></Col></Row>
                </Col>
            </Row>
            <Row className="mb-5 justify-content-center">
                <Col xs="9" sm="7" md="5" lg="3" xl="2">
                    <Button block size="lg" color="primary"><Link to="/signup">Get Started</Link></Button>
                </Col>
            </Row>

        </div>
    )
};

export default LandingPage;