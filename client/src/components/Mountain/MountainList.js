import React from "react"
import { useQuery } from "@apollo/client"
import { GET_LADDERS_BY_USERID } from "../../queries/ladders"
import Loading from "../Loading/Loading"
import {
  Container,
  Text,
  Link,
  Stack,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react"
import emptyMountain from "../../img/create-fear-mountain.png"
import MountainListItem from "./MountainListItem"

const MountainList = () => {
  const { loading, error, data, refetch } = useQuery(GET_LADDERS_BY_USERID)
  if (loading) return <Loading />
  if (error) {
    return `Something went wrong! ${error.message}`
  }
  const currentUserLadders = data.getMyLadders

  return (
    <Container pl="0" pr="0" maxWidth="100%">
      <Stack>
        <Heading mb="4"> My Mountains</Heading>
        {currentUserLadders.length === 0 ? (
          <Flex alignItems="center" flexDirection="column">
            <Image maxWidth="450px" width="100%" src={emptyMountain} alt="chatting" />
            <Text mt="4" as="i" fontWeight="bold" fontSize="lg">
              You have not created any Fear Mountains yet.{" "}
              <Link color="purple" colorScheme="purple" href="/mountains/new">
                Create one!
              </Link>
            </Text>
          </Flex>
        ) : (
          <Stack spacing={3}>
            {currentUserLadders.map(ladder => (
              <MountainListItem key={ladder.id} ladder={ladder} refetch={refetch}/>
            ))}
          </Stack>
        )}
      </Stack>
    </Container>
  )
}

export default MountainList
