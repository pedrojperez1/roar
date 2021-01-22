import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Fade, Form, FormGroup, Input } from "reactstrap";
import NewLadderContext from "../helpers/NewLadderContext";

const NewLadderStep4 = () => {
    const {newLadderData, setNewLadderData} = useContext(NewLadderContext);
    const [level8, setLevel8] = useState(newLadderData.level8 || '');
    const history = useHistory();
    
    useEffect(() => {
        const handleEnter = (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                setNewLadderData({...newLadderData, level8});
                console.log(level8);
                history.push("/newladder/5");
            };
        };
        window.addEventListener("keydown", handleEnter);
        return () => {
            window.removeEventListener("keydown", handleEnter)
        }
    }, [newLadderData, setNewLadderData, level8, history]);


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
                        <p className="lead mt-5">Press <kbd>Enter</kbd> to continue</p>
                        }
                        
                    </div>
                </Container>
            </div>
        </Fade>
    )
};

export default NewLadderStep4;