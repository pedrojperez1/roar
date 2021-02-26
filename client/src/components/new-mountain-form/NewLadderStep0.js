import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button, Container, Fade, Flex, Spacer, Stack, Text } from "@chakra-ui/react"
import NewLadderContext from "../../helpers/NewLadderContext"

const NewLadderStep0 = ({ setStep }) => {
  const { setNewLadderData } = useContext(NewLadderContext)
  useEffect(() => {
    setNewLadderData({}) // reset ladder state
  }, [])
  return (
    <div className="NewLadderStep0">
      <Container maxW="xl">
        <Fade in={true}>
          <Stack spacing={3}>
            <Text fontSize="xl">
              We will help you create your new Fear Mountain step by step. Make sure you carefully
              read the instructions so you get the most out of this exercise.
            </Text>
            <Text fontSize="xl">
              If you have never climbed a Fear Mountain before, we recommend you learn more about
              exposure therapy and CBT <Link to="/learn">here</Link>.
            </Text>
            <Text fontSize="xl">Now, let's get started!</Text>
          </Stack>
          <Flex mt={8}>
            <Spacer />
            <Button colorScheme="purple" onClick={() => setStep(1)}>
              Next
            </Button>
          </Flex>
        </Fade>
      </Container>
    </div>
  )
}

export default NewLadderStep0
