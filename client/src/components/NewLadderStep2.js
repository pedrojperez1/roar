import React, { useContext, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Container, Fade, FormControl, Input, Text, Button, Stack, Flex, Spacer } from "@chakra-ui/react";
import NewLadderContext from "../helpers/NewLadderContext";

const NewLadderStep2 = ({setStep}) => {
    const {newLadderData, setNewLadderData} = useContext(NewLadderContext);
    const [summit, setSummit] = useState(newLadderData.summit || '');
    const history = useHistory();
    
    const saveAndNext = useCallback(() => {
        setNewLadderData({...newLadderData, summit});
        setStep(3);
    }, [newLadderData, setNewLadderData, summit, history]);

    return (
        <div className="NewLadderStep2">
            <Container maxW="xl">
                <Fade in={true}>
                    <Stack>
                        <Text fontSize="xl">What is the one activity that you would like to be able to do but cannot because of this fear?</Text>
                        <Text fontSize="xl">For example, if my fear was dogs and I really wanted to be able to walk by the dog park, I would write: <i>Walk by the dog park</i>.</Text>
                        <Text fontSize="xl">We will call this your <b>Summit</b>. At the end of this journey, we all want to reach the summit!</Text>
                        <FormControl>
                            <Input onChange={(e) => setSummit(e.target.value)} value={summit} variant="flushed" size="lg" placeholder="Type here..."/>
                        </FormControl>
                    </Stack>
                    <Flex mt={8}>
                        <Button onClick={() => setStep(1)}>Back</Button>
                        <Spacer />
                        { summit.length > 4 && <Button colorScheme="blue" onClick={saveAndNext}>Next</Button> }
                    </Flex>
                </Fade>
            </Container>
        </div>
    )
};

export default NewLadderStep2;