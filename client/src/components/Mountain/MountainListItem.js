import React from "react"
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Flex,
  IconButton,
  HStack,
  Spacer,
  Stack,
  Progress
} from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import genTimeAgo from "../../helpers/genTimeAgo"
import { useMutation } from "@apollo/client"
import { REMOVE_LADDER_MUTATION } from "../../queries/ladders"


const MountainListItem = ({ladder, refetch}) => {
  const [removeLadder] = useMutation(REMOVE_LADDER_MUTATION, {
    variables: {
      id: ladder.id
    }
  });

  const handleRemove = () => {
    removeLadder();
    refetch();
  }

  const genLadderCompletedPct = ladder => {
    const numerator = ladder.assignments.filter(a => a.completed).length
    const denominator = ladder.assignments.length
    return denominator === 0 ? 0 : Math.round((numerator / denominator) * 100)
  }

  return (
    <HStack>
      <Box>
        <Flex>
          <LinkBox mr={5}>
            <LinkOverlay href={`/mountains/${ladder.id}`}>
              <Text fontSize="xl" fontWeight="bold">
                {ladder.name}
              </Text>
            </LinkOverlay>
              <Text fontSize="sm">Created {genTimeAgo(ladder.createdAt)}</Text>
          </LinkBox>
        </Flex>
      </Box>
      <Spacer />
        <Stack>
          <Progress size="md" value={genLadderCompletedPct(ladder)} color="green.400" />
          <Text>
            Completed {ladder.assignments.filter(a => a.completed).length}
            {" "}/ {ladder.assignments.length} tasks
          </Text>
        </Stack>
      <Spacer />
      <IconButton
          variant="outline"
          colorScheme="red"
          aria-label="Delete mountain"
          size="md"
          icon={<DeleteIcon />}
          onClick={handleRemove}
        />
    </HStack>
  )
}

export default MountainListItem