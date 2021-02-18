import React from "react"
import { useQuery } from "@apollo/client"
import { GET_LADDERS_BY_USERID } from "../queries/ladders"
import Loading from "./Loading"
import Layout from "./layout"
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
} from "@chakra-ui/react"
import genTimeAgo from "../helpers/genTimeAgo"


const LadderList = () => {
  const { loading, error, data } = useQuery(GET_LADDERS_BY_USERID)
  if (loading) return <Loading />
  if (error) {
    console.log("error", error)
    return `Something went wrong! ${error.message}`
  }
  const currentUserLadders = data.getMyLadders

  const genLadderCompletedPct = ladder => {
    console.log(ladder)
    const numerator = ladder.assignments.filter(a => a.completed).length
    const denominator = ladder.assignments.length
    console.log("numerator", numerator, "denominator", denominator)
    return denominator === 0 ? 0 : Math.round((numerator / denominator) * 100)
  }

  return (
    <Layout>
      <Container maxW="xl">
        <Stack>
          <Text fontSize="3xl" mb={4}>My Mountains</Text>
          {currentUserLadders.length === 0 ? (
            <Text>
              You have not created any fear ladders yet. Create one <Link colo="teal.500" href="/mountains/new">here</Link>!
            </Text>
          ) : (
            <Stack spacing={3}>
              {currentUserLadders.map(ladder => (
                <LinkBox key={ladder.id}>
                  <Flex>
                      <Box mr={5}>
                        <Text fontSize="xl" fontWeight="bold">{ladder.name}</Text>
                        <Text fontSize="sm">Created {genTimeAgo(ladder.createdAt)}</Text>
                      </Box>
                      <LinkOverlay href={`/mountains/${ladder.id}`} color="green.400">
                        <CircularProgress value={genLadderCompletedPct(ladder)} color="green.400">
                          <CircularProgressLabel>{`${genLadderCompletedPct(ladder)}%`}</CircularProgressLabel>
                        </CircularProgress>
                      </LinkOverlay>
                      
                  </Flex>
                </LinkBox>
              ))}
            </Stack>
          )}
        </Stack>
      </Container>
    </Layout>
  )
}

export default LadderList
