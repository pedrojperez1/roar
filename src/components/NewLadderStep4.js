import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Fade, Form, FormGroup, Input } from "reactstrap";
import NewLadderContext from "../helpers/NewLadderContext";

const NewLadderStep4 = () => {
    const [level8, setLevel8] = useState('');
    const {newLadderData, setNewLadderData} = useContext(NewLadderContext);
    const history = useHistory();
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setNewLadderData({...newLadderData, level8});
            console.log(level8);
            history.push("/newladder/5");
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
            <div className="NewLadderStep4">
                <Container>
                    <div className="text-left">
                        <blockquote className="blockquote">What is the one activity that you would like to be able to do but cannot because of this fear?</blockquote>
                        <p className="lead">Example: I want to be able to live with a dog, but my fear of dogs won't let me.</p>
                        <Col xs="6" className="pl-0">
                            <Form>
                                <FormGroup>
                                    <Input onChange={(e) => setLevel8(e.target.value)} type="text" />
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

export default NewLadderStep4;