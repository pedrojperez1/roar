import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import {
  Container,
  Fade,
  Text,
  Button,
  Stack,
  Flex,
  Spacer,
  Center,
  Heading,
} from "@chakra-ui/react"
import NewLadderContext from "../../helpers/NewLadderContext"
import arrayMove from "array-move"
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons"
import SortableActivities from "./SortableActivities"
import { useMutation } from "@apollo/client"
import { ADD_LADDER_MUTATION } from "../../queries/ladders"

const NewLadderStep4 = ({ setStep }) => {
  const { newLadderData, setNewLadderData } = useContext(NewLadderContext)
  const history = useHistory()

  const [addLadder] = useMutation(ADD_LADDER_MUTATION, {
    variables: { ...newLadderData },
    onCompleted: ({ addLadder }) => {
      history.push(`/mountains/${addLadder.id}`)
    },
  })

  const onSortEnd = ({oldIndex, newIndex}) => {
    setNewLadderData({ 
      ...newLadderData, 
      activities: arrayMove(newLadderData.activities, oldIndex, newIndex) 
    })
  };

  return (
    <div className="NewLadderStep3">
      <Container maxW="xl">
        <Fade in={true}>
          <Stack spacing={3}>
            <Text mb={5} fontSize="xl">Now sort these activities by how worried you would be performing them.</Text>
              <Stack>
                <Center>
                  <Heading size="md">Least worried</Heading>
                </Center>
                <Center>
                  <ArrowUpIcon boxSize="2em"/>
                </Center>
              </Stack>
            <SortableActivities items={newLadderData.activities} onSortEnd={onSortEnd}/>
            <Stack>
                <Center>
                  <ArrowDownIcon boxSize="2em"/>
                </Center>
                <Center>
                  <Heading size="md">Most worried</Heading>
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
