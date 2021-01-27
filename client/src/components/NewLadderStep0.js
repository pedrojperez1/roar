import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Fade } from "reactstrap";

const NewLadderStep0 = () => {
    const history = useHistory();
    
    useEffect(() => {
        const handleKeyPress = (e) => {
            console.log(e.key);
            history.push("/newladder/1")
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress)
        }
    }, [history])
    const nextButtonOrText = () => {
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            return (
                <Button onClick={() => history.push("/newladder/1")}>Continue</Button>
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
            <div className="NewLadderStep0 mt-5">
                <Container className="text-left">
                    <blockquote className="blockquote">We will walk you through the process of creating a new fear ladder, step by step. Make sure to read the instructions carefully so you get the most out of this exercise.</blockquote>
                    <blockquote className="blockquote">Now, let's get started!</blockquote>
                    <p class="lead mt-5">{nextButtonOrText()}</p>
                </Container>
            </div>
        </Fade>
    )

};

export default NewLadderStep0;