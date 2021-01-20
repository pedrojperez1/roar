import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Col, Container, Fade, Form, FormGroup, Input } from "reactstrap";
import NewLadderContext from "../helpers/NewLadderContext";
import { AiOutlinePlus } from "react-icons/ai"

const NewLadderStep5 = () => {
    const [activity, setActivity] = useState('');
    const [activities, setActivities] = useState([]);
    const {newLadderData, setNewLadderData} = useContext(NewLadderContext);
    const history = useHistory();
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setNewLadderData({...newLadderData, activities});
            console.log(activities);
            history.push("/newladder/6");
        };
    };
    useEffect(() => {
        window.addEventListener("keydown", handleEnter);
        return () => {
            window.removeEventListener("keydown", handleEnter)
        }
    }, [handleEnter]);

    const handleAddActivity = (e) => {
        e.preventDefault();
        setActivities([...activities, activity]);
        setActivity('');
    }

    return (
        <Fade>
            <div className="NewLadderStep5">
                <Container>
                    <div className="text-left">
                        <blockquote className="blockquote">Think of 3-7 activities that are related to your <b>Goal Activity</b>, but are not as terrifying. Think of these as stepping stones toward your <b>Goal Activity</b>. You can use the <kbd>+</kbd> button to add to your list.</blockquote>
                        <p className="lead">Example: If my <b>Goal Activity</b> is living with a dog, related activities are watching videos of dogs, petting a dog, or walking by the dog park.</p>
                        <Col xs="6" className="pl-0">
                            <Form inline>
                                <FormGroup>
                                    <Input onChange={(e) => setActivity(e.target.value)} type="text" value={activity}/>
                                </FormGroup>
                                <Button onClick={handleAddActivity}><AiOutlinePlus /></Button>
                            </Form>
                        </Col>
                        <ul>
                            {activities.map(a => <li>{a}</li>)}
                        </ul>
                        {activities.length > 2 && <p className="lead">Press <kbd>Enter</kbd> to continue</p>}
                    </div>
                </Container>
            </div>
        </Fade>
    )
};

export default NewLadderStep5;