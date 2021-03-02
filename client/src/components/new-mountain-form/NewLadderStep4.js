import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { Container, Fade, Text, Button, Stack, Flex, Spacer, Center, Box } from "@chakra-ui/react"
import NewLadderContext from "../../helpers/NewLadderContext"
import arrayMove from "array-move"
import SortableActivities from "./SortableActivities"
import { useMutation } from "@apollo/client"
import { ADD_LADDER_MUTATION } from "../../queries/ladders"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons"

const NewLadderStep4 = ({ setStep }) => {
  const { newLadderData, setNewLadderData } = useContext(NewLadderContext)
  const history = useHistory()

  const [addLadder] = useMutation(ADD_LADDER_MUTATION, {
    variables: { ...newLadderData },
    onCompleted: ({ addLadder }) => {
      history.push(`/mountains/${addLadder.id}`)
    },
  })

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setNewLadderData({
      ...newLadderData,
      activities: arrayMove(newLadderData.activities, oldIndex, newIndex),
    })
  }

  return (
    <div className="NewLadderStep3">
      <Container maxW="xl">
        <Fade in={true}>
          <Stack spacing={3}>
            <Text mb={5} fontSize="xl">
              Now sort these activities by how worried you would be performing them by dragging and
              dropping them.
            </Text>
            <Stack>
              <Center>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p="4"
                  bgColor="teal.300"
                  width="100%"
                  borderRadius="8px"
                >
                  <Text color="white" fontSize="xl" fontWeight="bold">
                    <span style={{ marginRight: "8px" }}>Least worried</span>{" "}
                    <FontAwesomeIcon icon={faArrowUp} />
                  </Text>
                </Box>
              </Center>
            </Stack>
            <SortableActivities items={newLadderData.activities} onSortEnd={onSortEnd} />
            <Stack>
              <Center>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p="4"
                  bgColor="red.400"
                  width="100%"
                  borderRadius="8px"
                >
                  <Text color="white" fontSize="xl" fontWeight="bold">
                    <span style={{ marginRight: "8px" }}>Most worried</span>{" "}
                    <FontAwesomeIcon icon={faArrowDown} />
                  </Text>
                </Box>
              </Center>
            </Stack>
          </Stack>
          <Flex mt={8}>
            <Button variant="outline" colorScheme="purple" onClick={() => setStep(3)}>
              Back
            </Button>
            <Spacer />
            <Button colorScheme="purple" onClick={addLadder}>
              Finish
            </Button>
          </Flex>
        </Fade>
      </Container>
    </div>
  )
}

export default NewLadderStep4
