import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Fade, Form, FormGroup, Input } from "reactstrap";
import NewLadderContext from "../helpers/NewLadderContext";

const NewLadderStep2 = () => {
    const [ladderName, setLadderName] = useState('');
    const {newLadderData, setNewLadderData} = useContext(NewLadderContext);
    const history = useHistory();
    
    useEffect(() => {
        const handleEnter = (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                setNewLadderData({...newLadderData, name: ladderName});
                history.push("/newladder/3");
            };
        };
        window.addEventListener("keydown", handleEnter);
        return () => {
            window.removeEventListener("keydown", handleEnter)
        }
    }, [history, setNewLadderData, newLadderData, ladderName]);


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
                        <p className="lead mt-5">Press <kbd>Enter</kbd> to continue</p>
                        }
                        
                    </div>
                </Container>
            </div>
        </Fade>
    )
};

export default NewLadderStep2;