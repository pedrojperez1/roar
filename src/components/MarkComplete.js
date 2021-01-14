import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { markTaskComplete } from "../actions/ladders";
import LadderContext from "../helpers/LadderContext";

const MarkComplete = ({assignmentId}) => {
    const ladderId = useContext(LadderContext);
    const ladderObj = useSelector(store => store.ladders[ladderId]);
    const dispatch = useDispatch();
    const handleMarkComplete = (assignmentId) => {
        console.log(`Marking ${assignmentId} as complete!`);
        dispatch(markTaskComplete(ladderId, ladderObj, assignmentId))
    }
    return (
        <Button 
            size="sm" 
            onClick={() => handleMarkComplete(assignmentId)}
        >Mark Complete</Button>
    )
};

export default MarkComplete;