import React, { useState } from "react";
import { Col, Input, ListGroupItem, Row } from "reactstrap";

const ActivityItem = ({task, anxiety, handleChangeAnxiety, disabled}) => {
    const [anxietyLevel, setAnxietyLevel] = useState(anxiety);
    const handleChange = (e) => {
        setAnxietyLevel(e.target.value);
        handleChangeAnxiety(task, anxietyLevel);
    }
    return (
        <div className="ActivityItem">
            <ListGroupItem className="text-center">
                <Row>
                    <Col xs="8" lg="7" xl="6">
                        {task}
                    </Col>
                    <Col>
                        <Input 
                            type="range" 
                            onChange={handleChange}
                            value={anxietyLevel}
                            disabled={disabled}
                        />
                    </Col>
                </Row>
            </ListGroupItem>
        </div>
    )
};

export default ActivityItem;