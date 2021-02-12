import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Box, Button, Container, Fade, Flex, Spacer, Stack, Text } from "@chakra-ui/react";

const NewLadderStep0 = () => {
    const history = useHistory();
    
    // useEffect(() => {
    //     const handleKeyPress = (e) => {
    //         console.log(e.key);
    //         history.push("/newladder/1")
    //     };
    //     window.addEventListener('keydown', handleKeyPress);
    //     return () => {
    //         window.removeEventListener("keydown", handleKeyPress)
    //     }
    // }, [history])
    // const nextButtonOrText = () => {
    //     if (/Mobi|Android/i.test(navigator.userAgent)) {
    //         return (
    //              <Button onClick={() => history.push("/newladder/1")}>Continue</Button>
    //         )
    //     } else {
    //         return (
    //             <>
    //                 Press <kbd>Enter</kbd> to continue
    //             </>
    //         )
    //     }
    // }
    return (
        <div className="NewLadderStep0 mt-5">
            <Fade in={true}>
                <Container maxW="xl">
                    <Stack spacing={3}>
                        <Text fontSize="xl">We will help you create your new Fear Mountain step by step. Make sure you carefully read the instructions so you get the most out of this exercise.</Text>
                        <Text fontSize="xl">If you have never climbed a Fear Mountain before, we recommend you learn more about exposure therapy and CBT <Link to="/learn">here</Link>.</Text>
                        <Text fontSize="xl">Now, let's get started!</Text>
                    </Stack>
                    <Flex>
                        <Spacer />
                        <Button onClick={() => history.push("/newladder/1")}>Next</Button>
                    </Flex>
                        
                </Container>
            </Fade>
        </div>
    )

};

export default NewLadderStep0;