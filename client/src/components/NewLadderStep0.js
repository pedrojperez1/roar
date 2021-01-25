import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Fade } from "reactstrap";

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

    return (
        <Fade>
            <div className="NewLadderStep0 mt-5">
                <Container className="text-left">
                    <blockquote className="blockquote">Now we will walk you through the process of creating a new fear ladder.</blockquote>
                    <blockquote className="blockquote">Let's get started!</blockquote>
                    <p class="lead mt-5">Press <kbd>Enter</kbd> to continue</p>
                </Container>
            </div>
        </Fade>
    )

};

export default NewLadderStep0;