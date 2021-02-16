import React, { useContext, useState, useCallback } from "react";
import { Container, Fade, FormControl, Input, Text, Button, Stack, Flex, Spacer } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import NewLadderContext from "../../helpers/NewLadderContext";


const NewLadderStep1 = ({setStep}) => {
    const {newLadderData, setNewLadderData} = useContext(NewLadderContext);
    const [ladderName, setLadderName] = useState(newLadderData.name || '');
    const history = useHistory();
    
    const saveAndNext = useCallback(() => {
        setNewLadderData({...newLadderData, name: ladderName});
        setStep(2);
    }, [newLadderData, setNewLadderData, ladderName, history]);

    return (
        <div className="NewLadderStep1">
            <Container maxW="xl">
                <Fade in={true}>
                <Stack spacing={3}>
                    <Text fontSize="xl">Let's give your Fear Mountain a name!</Text>
                    <Text fontSize="xl">It can be as fun or as boring as you want, but it should be related to the fear you want to conquer.</Text>
                    <Text fontSize="xl">For example, if I want to work on my fear of dogs, I might write: <i>Who let the dogs out?</i></Text>
                    <FormControl id="ladderName">
                        <Input onChange={(e) => setLadderName(e.target.value)} value={ladderName} variant="flushed" size="lg" placeholder="Type here..."/>
                    </FormControl>
                </Stack> 
                <Flex mt={8}>
                    <Button onClick={() => setStep(0)}>Back</Button>
                    <Spacer />
                    { ladderName.length > 4 && <Button colorScheme="blue" onClick={saveAndNext}>Next</Button> }
                </Flex>
                </Fade>
            </Container>
        </div>
    )
};

export default NewLadderStep1;