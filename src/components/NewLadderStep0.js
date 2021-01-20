import React, { useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Container, Fade } from "reactstrap";
import NewLadderContext from "../helpers/NewLadderContext";

const NewLadderStep0 = () => {
    const {setNewLadderData} = useContext(NewLadderContext);
    const history = useHistory();
    const handleKeyPress = (e) => {
        console.log(e.key);
        history.push("/newladder/1")
    }
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress)
        }
    }, [handleKeyPress])

    return (
        <Fade>
            <div className="NewLadderStep0 mt-5">
                <Container className="text-left">
                    <blockquote className="blockquote">Now we will walk you through the process of creating a new fear ladder.</blockquote>
                    <blockquote className="blockquote">Let's get started!</blockquote>
                    <p class="lead">Press <kbd>Enter</kbd> to begin</p>
                </Container>
            </div>
        </Fade>
    )

};

export default NewLadderStep0;