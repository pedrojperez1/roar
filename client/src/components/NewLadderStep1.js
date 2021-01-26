import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Fade } from "reactstrap";

const NewLadderStep1 = () => {
    const history = useHistory();
    
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === "1") {
                history.push("/newladder/2")
            }
            if (e.key === "2") {
                history.push("/learn")
            }
        };
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        }
    }, [history]);

    const nextButtonOrText = () => {
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            return (
                <>
                    <Button onClick={() => history.push("/newladder/2")}>Yes</Button>
                    <Button onClick={() => history.push("/learn")}>No</Button>
                </>
            )
        } else {
            return (
                <>
                    <kbd>1</kbd> Yes <kbd>2</kbd> No
                </>
            )
        }
    }

    return (
        <Fade>
            <div className="NewLadderStep1">
                <Container>
                    <blockquote class="blockquote text-left">Have you ever created a fear ladder before?</blockquote>
                    <p class="lead text-left mt-5">{nextButtonOrText()}</p>
                </Container>
            </div>
        </Fade>
    )
};

export default NewLadderStep1;