import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, ListGroup, ListGroupItem } from "reactstrap";

const LadderList = () => {
    const currentUserId = useSelector(store => store.users.currentUser);
    const allLadders = useSelector(store => store.ladders);
    const currentUserLadders = Object.keys(allLadders).filter(l => allLadders[l].userId === currentUserId);
    return (
        <div className="LadderList">
            <Container>
                <h3>My Ladders</h3>
                <ListGroup>
                    {
                        currentUserLadders.map(ladderId => (
                            <ListGroupItem tag={Link} to={`/ladders/${ladderId}`}>{allLadders[ladderId].name}</ListGroupItem>
                        ))
                    }

                </ListGroup>
                {/* {
                    ladders.map(ladder => (
                        <li>
                            <Link to={`/ladders/${ladder.ladder.id}`}>
                                {ladder.ladder.name}
                            </Link>
                        </li>
                    ))
                } */}
            </Container>
        </div>
    )
};

export default LadderList;