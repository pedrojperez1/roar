import React from "react";
import { Button } from "reactstrap";
import { useMutation } from "@apollo/client";
import { COMPLETE_ASSIGNMENT_MUTATION } from "../queries/assignments";

const MarkComplete = ({assignmentId, refetch}) => {

    const [markComplete] = useMutation(COMPLETE_ASSIGNMENT_MUTATION, {
        variables: {id: assignmentId},
        onCompleted: () => refetch()
    });

    return (
        <Button 
            size="sm" 
            onClick={markComplete}
        >Mark Complete</Button>
    )
};

export default MarkComplete;