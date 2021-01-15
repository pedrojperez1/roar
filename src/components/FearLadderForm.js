import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import LADDER from "../helpers/ladder";
import { ADD_LADDER_MUTATION } from "../queries/ladders";
import { useMutation } from "@apollo/client";

const FearLadderForm = () => {
    
    const INITIAL_STATE = {
        name: '',
        level1: '',
        level2: '',
        level3: '',
        level4: '',
        level5: '',
        level6: '',
        level7: '',
        level8: ''
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    
    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData(oldFormData => ({...oldFormData, [name] : value}))
    }
    
    let history = useHistory();
    const [addLadder] = useMutation(ADD_LADDER_MUTATION, {
        variables: {...formData}
        // onCompleted: ({addLadder}) => {
        //     history.push(`/ladders/${addLadder.id}`);
        // }
    })

    return (
        <div className="FearLadderForm">
            <h2 className="mb-5">Create a new fear ladder</h2>
            <Container>
                <Form>
                    <FormGroup row>
                        <Label for="name">Give your ladder a name</Label>
                        <Input type="text" name="name" onChange={handleChange}/>
                    </FormGroup>
                    {
                        LADDER.map(rung => (
                            <FormGroup row className="my-2" key={rung.name}>
                                <Label for={rung.name}>{rung.label}</Label>
                                <Input type="text" name={rung.name} onChange={handleChange}/>
                                <Label>{rung.helpText}</Label>
                            </FormGroup>
                        ))
                    }
                </Form>
                <Button color="primary" onClick={addLadder}>Submit</Button>
            </Container>
        </div>
    )
};

export default FearLadderForm;