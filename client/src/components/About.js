import React from "react"
import { Card, CardBody, CardDeck, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Fade, Jumbotron, Row } from "reactstrap"
import lesley from "../img/IMG_3008.jpg"
import pedro from "../img/IMG_2622.jpg"
import "./About.css"

const About = () => {
  return (
    <Fade>
      <div className="About mb-5">
        <Jumbotron fluid>
          <h1 className="display-3">Who are we?</h1>
          <p className="lead">
            We are an interdisciplinary team of psychologists and technologists working together to
            help people conquer their fears.
          </p>
        </Jumbotron>
        <Container>
          <Row className="mb-4">
            <p className="text-left lead">
            Everyone has experienced anxiety at some point. Although some amount of anxiety is normal, 
            even helpful, too much anxiety can stop us from living the life that we want to live. 
            When we get to the point where we feel that anxiety is making our choices for us, it can 
            be helpful to seek out help. 
            </p>
            <p className="text-left lead">
            One of the most effective tools we have for fighting anxiety is exposure therapy, but it 
            can be difficult to access. Our mission is to put the power of exposure 
            therapy at your fingertips. 
            </p>
            <p className="text-left lead">
            We have created this tool in the hopes that it will help 
            people who are interested in tackling a fear using evidence-based practices. We also 
            hope that our platform can be a helpful tool for clinicians who are interested in integrating 
            exposure therapy into their work.
            </p>
          </Row>
          <Row className="justify-content-center">
            <Col xs={8}>
              <CardDeck>
                {/* Lesley */}
                <Card className="mx-5" style={{"border": "none"}}>
                  <CardImg top width="100%" src={lesley} alt="Lesley"></CardImg>
                  <CardBody>
                    <CardTitle tag="h5">Lesley Norris</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Clinical Psychology PhD Candidate</CardSubtitle>
                    <CardText></CardText>
                  </CardBody>
                </Card>

                {/* Pedro */}
                <Card className="mx-5" style={{"border": "none"}}>
                  <CardImg top width="100%" src={pedro} alt="Pedro"/>
                  <CardBody>
                    <CardTitle tag="h5">Pedro Pérez</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Lead Software Engineer</CardSubtitle>
                  </CardBody>
                  <CardText></CardText>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </div>
    </Fade>
  )
}

export default About
