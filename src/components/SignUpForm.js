import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input, Button, Alert, Label } from "reactstrap";
import { addUser } from "../actions/users";

import "./SignUpForm.css";

const SignUpForm = () => {
    const INITIAL_STATE = {
        username: '',
        password: '',
        email: ''
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [alert, setAlert] = useState({visible: false, text: ''});

    let history = useHistory();

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData(oldFormData => ({...oldFormData, [name] : value}))
    }

    const dispatch = useDispatch();
    const handleSignUp = async (e) => {
        e.preventDefault();
        console.log("Signing up with:", formData)
        dispatch(addUser({...formData}));
        history.push("/home");
    }

    return (
        <div className="SignUpForm">
            <Alert color="danger" isOpen={alert.visible} toggle={() => setAlert({visible: false, text: ''})}>
                {alert.text}
            </Alert>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col xs={10} md={8} lg={6} xl={5}>
                        <Form className="SignUpForm-form text-left border p-5">
                            <h1 className="mb-5 text-center">Sign up for Roar!</h1>
                            <FormGroup>
                                <Label for="username">Username</Label>
                                <Input className="form-control"
                                    type="text"
                                    name="username"
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input className="form-control"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input className="form-control"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <div className="text-center">
                                <Button className="mt-4 mb-5" color="primary" size="lg" onClick={handleSignUp}>Sign Up</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default SignUpForm;