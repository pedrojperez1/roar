import React, { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { useMutation } from "@apollo/client";
import { COMPLETE_ASSIGNMENT_MUTATION } from "../queries/assignments";
import MarkCompleteModalForm from "./MarkCompleteModalForm";
import { ADD_FEED_POST } from "../queries/feeds";

const MarkComplete = ({assignmentId, refetch}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [postUpdateToFeed] = useMutation(ADD_FEED_POST, {
        variables: {
            content: "completed a level X task",
            type: "system"
        }        
    });

    const [markComplete] = useMutation(COMPLETE_ASSIGNMENT_MUTATION, {
        variables: {id: assignmentId},
        onCompleted: () => {
            refetch();
            toggle();
            postUpdateToFeed();
        }
    });

    return (
        <div className="MarkComplete">
            <Button 
                size="sm" 
                onClick={toggle}
            >Mark Complete</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody>
                    <MarkCompleteModalForm />
                <Button className="mr-1" color="primary" onClick={markComplete}>Mark Complete</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalBody>

            </Modal>
      </div>
    )
};

export default MarkComplete;