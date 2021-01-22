import { useMutation } from "@apollo/client";
import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Fade} from "reactstrap";
import NewLadderContext from "../helpers/NewLadderContext";
import ActivitySummary from "./ActivitySummary";
import { ADD_LADDER_MUTATION } from "../queries/ladders";

const NewLadderStep6 = () => {
    const { newLadderData } = useContext(NewLadderContext);
    const activities = newLadderData.activities;
    const [newLadderFormatted, setNewLadderFormatted] = useState({});

    console.log(activities);
    const history = useHistory();
    const [addLadder] = useMutation(ADD_LADDER_MUTATION, {
        variables: {...newLadderFormatted},
        onCompleted: ({addLadder}) => {
            history.push(`/ladders/${addLadder.id}`);
        }
    });
    useEffect(() => {
        const handleEnter = (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                setNewLadderFormatted(formatNewLadderData(newLadderData));
                addLadder();
            };
            
            if (e.key === "b") {
                e.preventDefault();
                history.push("/newladder/5");
            }
        };
        window.addEventListener("keydown", handleEnter);
        return () => {
            window.removeEventListener("keydown", handleEnter)
        }
    }, [addLadder, history, newLadderData]);

    const formatNewLadderData = (newLadder) => {
        let formatted = {};
        formatted.name = newLadder.name;
        const levels = Object.keys(newLadder.activities);
        levels.sort((a, b) => newLadder.activities[a] - newLadder.activities[b]);
        levels.forEach((level, idx) => formatted[`level${idx + 1}`] = level);
        formatted[`level${levels.length + 1}`] = newLadder.level8;
        console.log("formatted", formatted)
        return formatted;
    };

    
    
    return (
        <Fade>
            <div className="NewLadderStep6">
                <Container>
                    <div className="text-left">
                        <blockquote className="blockquote">Nice work! You're almost done!</blockquote>
                        <blockquote className="blockquote">
                            Look over your fear ladder below and make sure everything looks right. 
                            You can go back and make any changes now or you can always edit your ladder later on.
                        </blockquote>
                        <ActivitySummary newLadderData={newLadderData}/>
                        <p className="lead mt-5">Press <kbd>Enter</kbd> to finish or <kbd>B</kbd> to go back</p>
                    </div>
                </Container>
            </div>
        </Fade>
    )
};

export default NewLadderStep6;