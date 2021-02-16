import React, { useContext, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { 
    Container, 
    Fade, 
    Input, 
    Text, 
    Button, 
    Stack, 
    Flex, 
    Spacer, 
    NumberInput, 
    NumberInputField, 
    NumberInputStepper, 
    NumberIncrementStepper, 
    NumberDecrementStepper, 
    HStack } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import NewLadderContext from "../../helpers/NewLadderContext";
import ActivityItem from "../ActivityItem";

const NewLadderStep3 = ({setStep}) => {
    const {newLadderData, setNewLadderData} = useContext(NewLadderContext)
    const [task, setTask] = useState('')
    const [level, setLevel] = useState('')
    const [activities, setActivities] = useState(newLadderData.activities || [])
    const history = useHistory()
    
    const saveAndNext = useCallback(() => {
        setNewLadderData({...newLadderData, activities: activities})
        setStep(4)
    }, [newLadderData, setNewLadderData, activities, history])

    const handleAddActivity = (e) => {
        e.preventDefault();
        setActivities([...activities, {task: task, level: level}])
        setTask('')
        setLevel('')
    };

    const removeActivity = taskToRemove => {
        setActivities(activities.filter(activity => activity.task !== taskToRemove))
    }

    return (
        <div className="NewLadderStep3">
            <Container maxW="xl">
                <Fade in={true}>
                    <Stack spacing={3}>
                        <Text fontSize="xl">Now comes the fun part!</Text>
                        <Text fontSize="xl">
                            Think of some activities that cause you anxiety, but not as much as <b>{newLadderData.summit}</b>. 
                            Type them one at a time into the text box below and use the number toggle to tell us how afraid you would 
                            be of performing that activity, on a scale of 0-8, where 0 is "not at all" and 8 is "VERY much". Then use 
                            the <kbd>+</kbd> button to add to your list. 
                        </Text>
                        <Text fontSize="xl">We will call these activities your <b>Base Camps</b>. Soon you will master these on your way to the summit!</Text>
                        <HStack spacing={2}>
                            <Input onChange={(e) => setTask(e.target.value)} value={task} variant="flushed" size="lg" placeholder="Type here..."/>
                            <NumberInput min={0} max={8} onChange={(e) => setLevel(Number(e))} value={level} size="lg">
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <Button onClick={handleAddActivity}><AddIcon /></Button>
                        </HStack>
                        <Stack spacing={5}>
                            {
                                activities.map(activity => (
                                    <ActivityItem
                                        key={activity.task}
                                        task={activity.task}
                                        level={activity.level}
                                        removeActivity={removeActivity}
                                    />
                                ))
                            }
                        </Stack>
                    </Stack>
                    <Flex mt={8}>
                        <Button onClick={() => setStep(2)}>Back</Button>
                        <Spacer />
                        { activities.length > 2 && <Button colorScheme="blue" onClick={saveAndNext}>Next</Button> }
                    </Flex>
                </Fade>
            </Container>
        </div>
    )
};

export default NewLadderStep3;