import React from "react"
import { useQuery } from "@apollo/client"
import { GET_LADDERS_BY_USERID } from "../queries/ladders"
import Loading from "./Loading"
import {
  Box,
  Container,
  Text,
  Link,
  Stack,
  LinkBox,
  LinkOverlay,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
} from "@chakra-ui/react"
import genTimeAgo from "../helpers/genTimeAgo"

const LadderList = () => {
  const { loading, error, data } = useQuery(GET_LADDERS_BY_USERID)
  if (loading) return <Loading />
  if (error) {
    return `Something went wrong! ${error.message}`
  }
  const currentUserLadders = data.getMyLadders

  const genLadderCompletedPct = ladder => {
    const numerator = ladder.assignments.filter(a => a.completed).length
    const denominator = ladder.assignments.length
    return denominator === 0 ? 0 : Math.round((numerator / denominator) * 100)
  }

  return (
    <Container pl="0" pr="0" maxWidth="100%">
      <Stack>
        <Heading mb="4"> My Mountains</Heading>
        {currentUserLadders.length === 0 ? (
          <Text>
            You have not created any Fear Mountains yet.{" "}
            <Link color="purple" href="/mountains/new">
              Create one!
            </Link>
            !
          </Text>
        ) : (
          <Stack spacing={3}>
            {currentUserLadders.map(ladder => (
              <LinkBox key={ladder.id}>
                <Flex>
                  <Box mr={5}>
                    <Text fontSize="xl" fontWeight="bold">
                      {ladder.name}
                    </Text>
                    <Text fontSize="sm">Created {genTimeAgo(ladder.createdAt)}</Text>
                  </Box>
                  <LinkOverlay href={`/mountains/${ladder.id}`} color="green.400">
                    <CircularProgress value={genLadderCompletedPct(ladder)} color="green.400">
                      <CircularProgressLabel>{`${genLadderCompletedPct(
                        ladder
                      )}%`}</CircularProgressLabel>
                    </CircularProgress>
                  </LinkOverlay>
                </Flex>
              </LinkBox>
            ))}
          </Stack>
        )}
      </Stack>
    </Container>
  )
}

export default LadderList
