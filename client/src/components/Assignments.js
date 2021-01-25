import React from "react";
import {
    Container,
    Table
} from "reactstrap";
import MarkComplete from "./MarkComplete";
import dayjs from "dayjs";

const Assignments = ({assignments, refetch}) => {
    const sorted = [...assignments].sort((a, b) => {
        return Date.parse(a.dueDate) - Date.parse(b.dueDate);
    });

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
                            sorted.map((a, idx) => (
                                <tr key={a.id}>
                                    <th scope="row">{idx}</th>
                                    <td>{a.task}</td>
                                    <td>{dayjs(a.dueDate).format("ddd, MMM DD, YYYY")}</td>
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