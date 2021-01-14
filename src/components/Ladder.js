import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, CardBody, Container, ListGroup, ListGroupItem, UncontrolledCollapse } from "reactstrap";
import Assignments from "./Assignments";
import LadderContext from "../helpers/LadderContext";
import LadderLevelTitle from "./LadderLevelTitle";

const Ladder = () => {
    const { id } = useParams();
    const { name, levels, assignments } = useSelector(store => store.ladders[id]);
    if (!levels) {
        return "404: Not Found"
    };
    function getLevelAssignments(levelTask) {
        const assignmentIds = Object.keys(assignments).filter(a => assignments[a].task === levelTask);
        return assignmentIds.map(id => ({...assignments[id], id}));
    }

    function getLevelProgress(levelTask) {
        const assignmentIds = Object.keys(assignments).filter(a => assignments[a].task === levelTask);
        const progress = assignmentIds.reduce((sum, nextId) => {
            return assignments[nextId].completed ? sum += 1 : sum
        }, 0);
        return progress / assignmentIds.length * 100;
    }
    return (
        <LadderContext.Provider value={id}>
            <div className="Ladder">
                <Container>
                    <h3 className="mb-3">{name}</h3>
                    <ListGroup>
                        {
                            Object.keys(levels).map(level => (
                                <>
                                    <ListGroupItem tag="button" id={`toggler${level}`} action>
                                        <LadderLevelTitle 
                                            level={level[1]} 
                                            task={levels[level]}
                                            progress={getLevelProgress(levels[level])}
                                        />
                                    </ListGroupItem>
                                    <UncontrolledCollapse toggler={`#toggler${level}`}>
                                        <Card>
                                            <CardBody>
                                                <Assignments
                                                    key={level}
                                                    assignments={getLevelAssignments(levels[level])} 
                                                />
                                            </CardBody>
                                        </Card>
                                    </UncontrolledCollapse>
                                </>
                            ))
                        }
                    </ListGroup>
                </Container>
            </div>
        </LadderContext.Provider>
    )
};

export default Ladder;