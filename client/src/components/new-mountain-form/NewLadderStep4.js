import { useMutation } from "@apollo/client"
import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import NewLadderContext from "../../helpers/NewLadderContext"
import ActivitySummary from "../ActivitySummary"
import { ADD_LADDER_MUTATION } from "../../queries/ladders"
import { Button, Container, Fade, Flex, Spacer, Stack, Text } from "@chakra-ui/react"

const NewLadderStep4 = ({setStep}) => {
  const { newLadderData } = useContext(NewLadderContext)

  const history = useHistory()
  const [addLadder] = useMutation(ADD_LADDER_MUTATION, {
    variables: { ...newLadderData },
    onCompleted: ({ addLadder }) => {
      history.push(`/mountains/${addLadder.id}`)
    },
  })

  return (
    <div className="NewLadderStep4">
      <Container maxW="xl">
        <Fade in={true}>
          <Stack spacing={3}>
            <Text fontSize="xl">Aaaand you're (almost) done!</Text>
            <Text fontSize="xl">
              Look over your Fear Mountain below and make sure everything looks right. You can go back
              and make any changes now or you can edit your mountain later on.
            </Text>
            <ActivitySummary newLadderData={newLadderData} />
          </Stack>
          <Flex mt={8}>
            <Button onClick={() => setStep(3)}>Back</Button>
            <Spacer />
            <Button colorScheme="blue" onClick={addLadder}>Finish</Button>
          </Flex>
        </Fade>
      </Container>
    </div>
  )
}

export default NewLadderStep4
