import React, { useContext, useState, useCallback, useRef } from "react"
import { useHistory } from "react-router-dom"
import {
  Container,
  Fade,
  Input,
  Text,
  Button,
  Stack,
  Flex,
  Spacer,
  HStack,
  Kbd,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import NewLadderContext from "../../helpers/NewLadderContext"
import ActivityItem from "./ActivityItem"

const NewLadderStep3 = ({ setStep }) => {
  const { newLadderData, setNewLadderData } = useContext(NewLadderContext)
  const [task, setTask] = useState("")
  const [activities, setActivities] = useState(newLadderData.activities || [])
  const history = useHistory()
  const activityRef = useRef()
  const saveAndNext = useCallback(() => {
    setNewLadderData({ ...newLadderData, activities: activities })
    setStep(4)
  }, [newLadderData, setNewLadderData, activities, history])

  const handleAddActivity = e => {
    e.preventDefault()
    setActivities([...activities, { task: task }])
    setTask("")
    activityRef.current.focus()
  }

  const handleKeyDown = e => {
    if (e.key === "Enter") handleAddActivity(e)
  }

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
              Think of some activities that cause you anxiety, but not as much as your Summit activity{" "}
              (<b>{newLadderData.summit}</b>).
            </Text>
            <Text fontSize="xl">
              Type them one at a time into the text box below use the <Kbd>+</Kbd>{" "}
              button or the <Kbd>Enter</Kbd> key to add them to your list.
            </Text>
            <HStack spacing={2} mb={5}>
              <Input
                ref={activityRef}
                onChange={e => setTask(e.target.value)}
                value={task}
                variant="flushed"
                size="lg"
                placeholder="Type here..."
                onKeyDown={handleKeyDown}
              />
              <Button onClick={handleAddActivity}>
                <AddIcon />
              </Button>
            </HStack>
            <Flex flexWrap="wrap">
              {activities.map(activity => (
                <ActivityItem
                  key={activity.task}
                  task={activity.task}
                  removeActivity={removeActivity}
                />
              ))}
            </Flex>
          </Stack>
          <Flex mt={8}>
            <Button variant="outline" colorScheme="purple" onClick={() => setStep(2)}>
              Back
            </Button>
            <Spacer />
            {activities.length > 2 && (
              <Button colorScheme="purple" onClick={saveAndNext}>
                Next
              </Button>
            )}
          </Flex>
        </Fade>
      </Container>
    </div>
  )
}

export default NewLadderStep3
