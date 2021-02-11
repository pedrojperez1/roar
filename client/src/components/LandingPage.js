import React from "react"
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom"
import { ImPencil2, ImClipboard, ImRocket } from "react-icons/im"
import { Container, Image, Flex, Box, Heading, Button } from "@chakra-ui/react"
import hero from "../img/hero.png"

const LandingPage = () => {
  return (
    <Container maxWidth="5xl">
      <Flex justifyContent="space-between" alignItems="center">
        <Box maxWidth="350px" textAlign="left">
          <Heading color="#5A43F5" className="display-2">
            Making personal growth accessible
          </Heading>
          <p className="lead">
            Roar is a tool to help you overcome your fears in a safe and supervised environment.
          </p>
          <p className="lead">
            <Button color="primary">
              <Link to="/learn">Learn More</Link>
            </Button>
          </p>
        </Box>
        <Box>
          <Image width="550px" src={hero} alt="hero" />
        </Box>
      </Flex>

      <Row>
        <Col>
          <h3 className="mb-5">We put the power of exposure therapy at your fingertips.</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="mb-5">
            <Col>
              <h1 className="display-1">
                <ImPencil2 />
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="blockquote">Build your plan</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="mb-5">
            <Col>
              <h1 className="display-1">
                <ImClipboard />
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="blockquote">Complete assignments</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="mb-5">
            <Col>
              <h1 className="display-1">
                <ImRocket />
              </h1>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <p className="blockquote">Conquer your fear!</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mb-5 justify-content-center">
        <Col xs="9" sm="7" md="5" lg="3" xl="2">
          <Button block size="lg" color="primary">
            <Link to="/signup">Get Started</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage
