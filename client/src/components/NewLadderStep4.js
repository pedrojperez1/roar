import React, { useEffect, useContext, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button, Col, Container, Fade, Form, FormGroup, Input } from "reactstrap";
import NewLadderContext from "../helpers/NewLadderContext";

const NewLadderStep4 = () => {
    const {newLadderData, setNewLadderData} = useContext(NewLadderContext);
    const [level8, setLevel8] = useState(newLadderData.level8 || '');
    const history = useHistory();
    
    const saveAndNext = useCallback(() => {
        setNewLadderData({...newLadderData, level8});
        history.push("/newladder/5");
    }, [newLadderData, setNewLadderData, level8, history]);
    
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
    };

    return (
        <Fade>
            <div className="NewLadderStep4">
                <Container>
                    <div className="text-left">
                        <blockquote className="blockquote">What is the one activity that you would like to be able to do but cannot because of this fear? We'll call this your <b>Goal Activity</b>.</blockquote>
                        <p className="lead"><u><b>Example:</b></u> My fear of dogs will not allow me to live with a dog, so my Goal Activity is: <i>Living with a dog</i>.</p>
                        <Col xs="6" className="pl-0">
                            <Form>
                                <FormGroup>
                                    <Input onChange={(e) => setLevel8(e.target.value)} type="text" value={level8}/>
                                </FormGroup>
                            </Form>
                        </Col>
                        { level8.length > 4 && 
                        <p className="lead mt-5">{nextButtonOrText()}</p>
                        }
                        
                    </div>
                </Container>
            </div>
        </Fade>
    )
};

export default NewLadderStep4;