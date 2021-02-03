import React from "react"
import { Container, Fade, Jumbotron } from "reactstrap"

const About = () => {
  return (
    <Fade>
      <div className="About">
        <Jumbotron fluid>
          <h1 className="display-3">Who are we?</h1>
          <p className="lead">
            We are an interdisciplinary team of psychologists and technologists working together to
            help people conquer their fears.
          </p>
        </Jumbotron>
        <Container>
          <p className="text-left lead">
            Sint irure veniam consectetur voluptate deserunt consectetur sint ex. In id velit minim
            elit eu consequat reprehenderit elit exercitation ullamco eu commodo ipsum. Minim
            laborum nostrud officia elit anim nostrud dolor occaecat ex velit laboris. Aliquip
            excepteur minim esse dolore minim.
          </p>
          <p className="text-left lead">
            Sint irure veniam consectetur voluptate deserunt consectetur sint ex. In id velit minim
            elit eu consequat reprehenderit elit exercitation ullamco eu commodo ipsum. Minim
            laborum nostrud officia elit anim nostrud dolor occaecat ex velit laboris. Aliquip
            excepteur minim esse dolore minim.
          </p>
          <p className="text-left lead">
            Sint irure veniam consectetur voluptate deserunt consectetur sint ex. In id velit minim
            elit eu consequat reprehenderit elit exercitation ullamco eu commodo ipsum. Minim
            laborum nostrud officia elit anim nostrud dolor occaecat ex velit laboris. Aliquip
            excepteur minim esse dolore minim.
          </p>
        </Container>
      </div>
    </Fade>
  )
}

export default About
