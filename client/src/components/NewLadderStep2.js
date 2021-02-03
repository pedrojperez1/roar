import React, { useEffect, useContext, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button, Col, Container, Fade, Form, FormGroup, Input } from "reactstrap";
import NewLadderContext from "../helpers/NewLadderContext";

const NewLadderStep2 = () => {
    const [ladderName, setLadderName] = useState('');
    const {newLadderData, setNewLadderData} = useContext(NewLadderContext);
    const history = useHistory();
    
    const saveAndNext = useCallback(() => {
        setNewLadderData({...newLadderData, name: ladderName});
        history.push("/newladder/3");
    }, [newLadderData, setNewLadderData, ladderName, history]);

    useEffect(() => {
        const handleEnter = (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                saveAndNext();
            }
        };
        window.addEventListener("keydown", handleEnter);
        return () => {
            window.removeEventListener("keydown", handleEnter)
        }
    }, [saveAndNext]);

    const nextButtonOrText = () => {
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            return (
                <Button onClick={saveAndNext}>Continue</Button>
            )
        } else {
            return (
                <>
                    Press <kbd>Enter</kbd> to continue
                </>
            )
        }
    }

    return (
        <Fade>
            <div className="NewLadderStep2">
                <Container>
                    <div className="text-left">
                        <blockquote className="blockquote">Let's give your fear ladder a name!</blockquote>
                        <blockquote className="blockquote">In a few words, tell us what fear you want to work on.</blockquote>
                        <p className="lead"><u><b>Example:</b></u> My fear of dogs</p>
                        <Col xs="6" className="pl-0">
                            <Form>
                                <FormGroup>
                                    <Input onChange={(e) => setLadderName(e.target.value)} type="text" value={ladderName} />
                                </FormGroup>
                            </Form>
                        </Col>
                        { ladderName.length > 4 && 
                        <p className="lead mt-5">{nextButtonOrText()}</p>
                        }
                        
                    </div>
                </Container>
            </div>
        </Fade>
    )
};

export default NewLadderStep2;