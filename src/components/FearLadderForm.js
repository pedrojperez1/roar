import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import LADDER from "../helpers/ladder";
import { addLadder } from "../actions/ladders";

const FearLadderForm = () => {
    const currentUserId = useSelector(store => store.users.currentUser);
    const INITIAL_STATE = {
        name: '',
        l1: '',
        l2: '',
        l3: '',
        l4: '',
        l5: '',
        l6: '',
        l7: '',
        l8: ''
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    let history = useHistory();

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData(oldFormData => ({...oldFormData, [name] : value}))
    }

    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newLadder = {
            name: formData.name,
            levels: {
                l1: formData.l1,
                l2: formData.l2,
                l3: formData.l3,
                l4: formData.l4,
                l5: formData.l5,
                l6: formData.l6,
                l7: formData.l7,
                l8: formData.l8
            }
        };
        dispatch(addLadder(currentUserId, newLadder));
        history.push("/ladders");
    }

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
                <Button color="primary" onClick={handleSubmit}>Submit</Button>
            </Container>
        </div>
    )
};

export default FearLadderForm;