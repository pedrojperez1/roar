import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Fade, Form, FormGroup, Input } from "reactstrap";
import NewLadderContext from "../helpers/NewLadderContext";

const NewLadderStep2 = () => {
    const [ladderName, setLadderName] = useState('');
    const {newLadderData, setNewLadderData} = useContext(NewLadderContext);
    const history = useHistory();
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setNewLadderData({...newLadderData, name: ladderName});
            console.log(ladderName);
            history.push("/newladder/3");
        };
    };
    useEffect(() => {
        window.addEventListener("keydown", handleEnter);
        return () => {
            window.removeEventListener("keydown", handleEnter)
        }
    }, [handleEnter]);


    return (
        <Fade>
            <div className="NewLadderStep2">
                <Container>
                    <div className="text-left">
                        <blockquote className="blockquote">In a few words, tell us what fear you want to work on.</blockquote>
                        <p className="lead">Example: My fear of dogs</p>
                        <Col xs="6" className="pl-0">
                            <Form>
                                <FormGroup>
                                    <Input onChange={(e) => setLadderName(e.target.value)} type="text" />
                                </FormGroup>
                            </Form>
                        </Col>
                        <p className="lead">Press <kbd>Enter</kbd> to continue</p>
                    </div>
                </Container>
            </div>
        </Fade>
    )
};

export default NewLadderStep2;