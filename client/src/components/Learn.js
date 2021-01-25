import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Fade, Jumbotron } from "reactstrap";

const Learn = () => {
    return (
        <Fade>
            <div className="Learn">
 
                    <Jumbotron fluid>
                        <h1 className="display-3">What is exposure therapy?</h1>
                        <p className="lead">Exposure therapy is a tool used in cognitive behavioral therapy which has been shown to help treat anxiety.</p>
                    </Jumbotron>
                    <Container>
                        <p className="text-left lead">Sint irure veniam consectetur voluptate deserunt consectetur sint ex. In id velit minim elit eu consequat reprehenderit elit exercitation ullamco eu commodo ipsum. Minim laborum nostrud officia elit anim nostrud dolor occaecat ex velit laboris. Aliquip excepteur minim esse dolore minim.</p>
                        <p className="text-left lead">Sint irure veniam consectetur voluptate deserunt consectetur sint ex. In id velit minim elit eu consequat reprehenderit elit exercitation ullamco eu commodo ipsum. Minim laborum nostrud officia elit anim nostrud dolor occaecat ex velit laboris. Aliquip excepteur minim esse dolore minim.</p>
                        <p className="text-left lead">Sint irure veniam consectetur voluptate deserunt consectetur sint ex. In id velit minim elit eu consequat reprehenderit elit exercitation ullamco eu commodo ipsum. Minim laborum nostrud officia elit anim nostrud dolor occaecat ex velit laboris. Aliquip excepteur minim esse dolore minim.</p>
                        <p className="mt-5 h4">Interested? Start by building you own fear ladder.</p>
                        <Button className="mt-3" color="primary"><Link to="/newladder/2">Get Started</Link></Button>
                    </Container>

            </div>
        </Fade>
    )
};

export default Learn;