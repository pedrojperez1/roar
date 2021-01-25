import React, { useContext } from "react";
import { Col, Container, ListGroupItem, Row } from "reactstrap";
import NewLadderContext from "../helpers/NewLadderContext";
import ActivityItem from "./ActivityItem";

const ActivitySummary = () => {
    const {newLadderData, setNewLadderData} = useContext(NewLadderContext);
    const activities = newLadderData.activities;
    const sortedActivities = [...Object.keys(activities)].sort((a, b) => activities[a].anxiety - activities[b].anxiety);

    const handleChangeAnxiety = (task, newAnxiety) => {
        if (task === newLadderData.level8) {
            setNewLadderData({
                ...newLadderData,
                intensity: newAnxiety
            });
        } else {
            setNewLadderData({
                ...newLadderData,
                activities: {
                    ...newLadderData.activities,
                    [task]: {anxiety: newAnxiety}
                }
            });
        }
    };

    return (
        <div className="ActivitySummary">
            <Container className="border my-5 w-75 text-center">
                <Row className="my-3 align-items-center">
                    <Col xs="3">
                        <h4>Activities</h4>
                    </Col>
                    <Col>
                    { sortedActivities.map(key => (
                        <ActivityItem
                            key={key}
                            task={key} 
                            anxiety={activities[key].anxiety}
                            handleChangeAnxiety={handleChangeAnxiety}
                            disabled={true}
                        />
                    ))}
                    </Col>
                </Row>
                <Row className="my-3 align-items-center">
                    <Col xs="3">
                        <h4>Goal Activity</h4>
                    </Col>
                    <Col>
                        <ListGroupItem className="text-center">
                            <b>{newLadderData.level8}</b>
                        </ListGroupItem>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default ActivitySummary;