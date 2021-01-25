import React from "react";
import { CustomInput, Form, FormGroup, Input, Label } from "reactstrap";

const MarkCompleteModalForm = () => {
    return (
        <div className="MarkCompleteModalForm">
            <Form>
                <FormGroup>
                    <Label for="anxietySlider">How much anxiety did you experience while completing the task?</Label>
                    <Input className="form-control-lg" type="range" name="anxietySlider"/>
                </FormGroup>
                <FormGroup>
                    <CustomInput className="form-control-lg" type="checkbox" id="exampleCustomCheckbox" label="I completed this task after the due date" />
                </FormGroup>
            </Form>
        </div>
    )
};

export default MarkCompleteModalForm;