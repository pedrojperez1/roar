import React, { useEffect, useContext, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button, Col, Container, Fade, Input, InputGroup, InputGroupAddon, Row } from "reactstrap";
import NewLadderContext from "../helpers/NewLadderContext";
import { AiOutlinePlus } from "react-icons/ai"
import ActivityItem from "./ActivityItem";

const NewLadderStep3 = () => {
    const {newLadderData, setNewLadderData} = useContext(NewLadderContext);
    const [activity, setActivity] = useState('');
    const [activities, setActivities] = useState(newLadderData.activities || {});
    const history = useHistory();
    
    const saveAndNext = useCallback(() => {
        setNewLadderData({...newLadderData, activities});
        history.push("/newladder/4");
    }, [newLadderData, setNewLadderData, activities, history]);

    // useEffect(() => {
    //     const handleEnter = (e) => {
    //         if (e.key === "Enter") {
    //             e.preventDefault();
    //             if (Object.keys(activities).length >= 3) { // disallow enter if we don't have 3 activites yet
    //                 saveAndNext();
    //             }
    //         }
    //     };
    //     window.addEventListener("keydown", handleEnter);
    //     return () => {
    //         window.removeEventListener("keydown", handleEnter)
    //     }
    // }, [activities, saveAndNext]);

    const handleAddActivity = (e) => {
        e.preventDefault();
        setActivities({ ...activities, [activity]: {anxiety: 50} });
        setActivity('');
    };

    const handleChangeAnxiety = (task, newAnxiety) => {
        setActivities({ ...activities, [task]: {anxiety: newAnxiety} });
    };

    // const nextButtonOrText = () => {
    //     if (/Mobi|Android/i.test(navigator.userAgent)) {
    //         return (
    //             <Button onClick={saveAndNext}>Continue</Button>
    //         )
    //     } else {
    //         return (
    //             <>
    //                 Press <kbd>Enter</kbd> to continue
    //             </>
    //         )
    //     }
    // };

    return (
        <Fade>
            <div className="NewLadderStep3">
                <Container>
                    <div className="text-left">
                        <blockquote className="blockquote">Now comes the fun part!</blockquote>
                        <blockquote className="blockquote">
                            Think of 3-7 activities that are similar to your <b>Goal Activity</b>, but are not as terrifying. 
                            Think of these as stepping stones toward your <b>Goal Activity</b>. You can use the <kbd>+</kbd> button 
                            to add to your list. Use the slider to indicate how anxious you would feel performing the activity.
                        </blockquote>
                        <p className="lead"><u><b>Example:</b></u> If my <b>Goal Activity</b> is living with a dog, similar activities are watching videos of dogs, petting a dog, or walking by the dog park.</p>
                        <Row>
                            <Col xs="6" className="mb-3">
                                <InputGroup>
                                    <InputGroupAddon addonType="append">
                                        <Button onClick={handleAddActivity}><AiOutlinePlus /></Button>
                                    </InputGroupAddon>
                                    <Input onChange={(e) => setActivity(e.target.value)} type="text" value={activity}/>
                                </InputGroup>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" md="10" lg="8" xl="8">
                                {Object.keys(activities).map(key => (
                                    <ActivityItem
                                        key={key}
                                        task={key} 
                                        anxiety={activities[key].anxiety}
                                        handleChangeAnxiety={handleChangeAnxiety}
                                    />
                                ))}
                            </Col>
                        </Row>
                        {Object.keys(activities).length > 2 && 
                        <p className="lead mt-5"><Button onClick={saveAndNext}>Continue</Button></p>}
                    </div>
                </Container>
            </div>
        </Fade>
    )
};

export default NewLadderStep3;