import { useQuery } from "@apollo/client";
import React from "react";
import { CardDeck, Card, CardBody, Row } from "reactstrap";
import { GET_USER_ACHIEVEMENTS } from "../queries/achievements";
import Loading from "./Loading";

const Achievements = ({username}) => {
    const {loading, error, data} = useQuery(GET_USER_ACHIEVEMENTS, {
        variables: {username: username}
    });
    if (loading) return <Loading />
    if (error) return "Something bad happened :("
    return (
        <div className="Achievements">
            <Row className="mb-3">
                <h1 className="font-weight-light">Achievements</h1>
            </Row>
            {
                data.getUserAchievements.length === 0 ?
                <p>No achievements... yet!</p> :
                <Row>
                    <CardDeck>
                        {
                            data.getUserAchievements.map(a => (
                                <Card key={a.id}>
                                    <CardBody>
                                        <p>{a.name}</p>
                                    </CardBody>
                                </Card>
                            ))
                        }
                    </CardDeck>
                </Row>
            }
        </div>
    )
};

export default Achievements;