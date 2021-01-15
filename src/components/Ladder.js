import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, Container, ListGroup, ListGroupItem, UncontrolledCollapse } from "reactstrap";
import Assignments from "./Assignments";
import Loading from "./Loading";
import LadderLevelTitle from "./LadderLevelTitle";
import { useQuery } from "@apollo/client";
import { LADDER_QUERY } from "../queries/ladders";

const Ladder = () => {
    const { id } = useParams();
    const { loading, error, data, refetch } = useQuery(LADDER_QUERY, {
        variables: {
            id: Number(id)
        }
    });
    if (loading) return <Loading />;
    if (error) {
        console.log("error", error);
        return `Something went wrong! ${error.message}`
    };
    const ladder = data.ladders[0];
    const levels = Object.keys(ladder).filter(key => key.includes("level"));
    const assignments = ladder.assignments;

    function getLevelAssignments(levelTask) {
        return assignments.filter(a => a.task === levelTask);
    }

    function getLevelProgress(levelTask) {
        const levelAssignments = assignments.filter(a => a.task === levelTask);
        const progress = levelAssignments.reduce((sum, next) => {
            return next.completed ? sum += 1 : sum
        }, 0);
        return progress / levelAssignments.length * 100;
    }
    return (
        <div className="Ladder">
            <Container>
                <h3 className="mb-3">{ladder.name}</h3>
                <ListGroup>
                    {
                        levels.map(level => (
                            <>
                                <ListGroupItem tag="button" id={`toggler${level}`} action>
                                    <LadderLevelTitle 
                                        level={level[5]} 
                                        task={ladder[level]}
                                        progress={getLevelProgress(ladder[level])}
                                    />
                                </ListGroupItem>
                                <UncontrolledCollapse toggler={`#toggler${level}`}>
                                    <Card>
                                        <CardBody>
                                            <Assignments
                                                key={level}
                                                assignments={getLevelAssignments(ladder[level])}
                                                refetch={refetch} 
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
    )
};

export default Ladder;