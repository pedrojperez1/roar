import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Fade, Form, FormGroup, Input } from "reactstrap";
import NewLadderContext from "../helpers/NewLadderContext";

const NewLadderStep3 = () => {
    const {newLadderData, setNewLadderData} = useContext(NewLadderContext);
    const [intensity, setIntensity] = useState(newLadderData.intensity || null);
    const history = useHistory();
    
    useEffect(() => {
        const handleEnter = (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                setNewLadderData({...newLadderData, intensity: intensity});
                history.push("/newladder/4");
            };
        };
        window.addEventListener("keydown", handleEnter);
        return () => {
            window.removeEventListener("keydown", handleEnter)
        }
    }, [newLadderData, setNewLadderData, intensity, history]);


    return (
        <Fade>
            <div className="NewLadderStep3">
                <Container>
                    <div className="text-left">
                        <blockquote className="blockquote">Roughly speaking, how much does this fear interfere with your daily life?</blockquote>
                        <Col xs="6" className="pl-0">
                            <Form>
                                <FormGroup>
                                    <Input onChange={(e) => setIntensity(e.target.value)} type="range" />
                                </FormGroup>
                            </Form>
                        </Col>
                        { intensity && 
                        <p className="lead mt-5">Press <kbd>Enter</kbd> to continue</p>
                        }
                        
                    </div>
                </Container>
            </div>  
        </Fade>
    )
};

export default NewLadderStep3;