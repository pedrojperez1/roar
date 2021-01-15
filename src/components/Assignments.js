import React from "react";
import {
    Container,
    Table
} from "reactstrap";
import MarkComplete from "./MarkComplete";

const Assignments = ({assignments, refetch}) => {
    return (
        <div className="Assignments">
            <Container fluid>
                <Table hover size="sm" className="border">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task</th>
                            <th>Due Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            assignments.map((a, idx) => (
                                <tr>
                                    <th scope="row">{idx}</th>
                                    <td>{a.task}</td>
                                    <td>{a.dueDate}</td>
                                    <td>{a.completed ? "Done!" : <MarkComplete assignmentId={a.id} refetch={refetch}/>}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
};

export default Assignments;