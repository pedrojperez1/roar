import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../queries/users";
import "./LoginForm.css";

const LoginForm = ({setUser}) => {
    const INITIAL_STATE = { username: '', password: '' };
    const [formData, setFormData] = useState(INITIAL_STATE);
    
    const history = useHistory();

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData(oldFormData => ({...oldFormData, [name] : value}))
    }
    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {...formData},
        onCompleted: ({login}) => {
            setUser(login.token);
            history.push("/home");

        }
    })

    return (
        <div className="LoginForm">
            {/* <Alert color="danger" isOpen={alertVisible} toggle={() => setAlertVisible(false)}>
                {alertText}
            </Alert> */}
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col xs={10} md={8} lg={6} xl={5}>
                        <Form className="LoginForm-form text-center border p-5">
                            <h1 className="mb-5">Welcome back!</h1>
                            <FormGroup>
                                <Input className="form-control"
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input className="form-control"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <Button className="mt-4 mb-5" color="primary" size="lg" onClick={login}>Sign In</Button>
                            <p>Need an account? Sign up <Link to="/signup">here!</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default LoginForm;