import React from "react";
import { CardDeck, Card, CardBody, Row } from "reactstrap";

const Achievements = () => {
    return (
        <div className="Achievements">
            <Row className="mb-3">
                <h1 className="font-weight-light">Achievements</h1>
            </Row>
            <Row>
                <CardDeck>
                    <Card>
                        <CardBody>
                            <p>Achievement 1</p>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <p>Achievement 2</p>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <p>Achievement 2</p>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Row>
        </div>
    )
};

export default Achievements;