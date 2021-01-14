import React from "react";
import { Col, Container, Progress, Row } from "reactstrap";

const LadderLevelTitle = ({level, task, progress}) => {
    return (
        <Container fluid>
            <Row>
                <Col xs={2}>
                    <span>Level {level}</span>
                </Col>
                <Col>
                    <span className="text-muted"><b>{task}</b></span>
                </Col>
                <Col xs={2}>
                    <Progress animated color="success" value={progress} />
                </Col>
            </Row>
        </Container>
    )
};

export default LadderLevelTitle;