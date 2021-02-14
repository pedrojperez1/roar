import React from "react"
import { Link } from "react-router-dom"
import { FETCH_MY_PROFILE_QUERY } from "../queries/users"
import Statistics from "./Statistics"
import Following from "./Following"
import Achievements from "./Achievements"
import { useQuery } from "@apollo/client"
import Loading from "./Loading"
import genJoinDate from "../helpers/genJoinDate"
import Layout from "./layout"
import { Container, Heading, Grid, Box, GridItem, Button, Text, Flex } from "@chakra-ui/react"

const Home = () => {
  const { loading, error, data } = useQuery(FETCH_MY_PROFILE_QUERY)
  if (loading) return <Loading />
  if (error) {
    return `Something bad happened. ${error}`
  }
  return (
    <Layout maxWidth="5xl">
      <Grid gap={4} templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}>
        <GridItem colSpan={3}>
          <Box mb="4" textAlign="left">
            <Heading mb>
              <Link to={`/u/${data.getMyProfile.username}`}>{data.getMyProfile.username}</Link>
            </Heading>

            <Box>
              <p>Joined {genJoinDate(data.getMyProfile.createdAt)}</p>
            </Box>
          </Box>
          <Flex textAlign="left" flexDirection="column">
            <Statistics ladders={data.getMyProfile.ladders} />
            <Box>
              <Achievements username={data.getMyProfile.username} />
            </Box>
          </Flex>
        </GridItem>
        <GridItem colSpan={2}>
          <Box
            display="flex"
            flexDirection="column"
            p={"8"}
            mb="4"
            border="1px solid rgb(226, 232, 240)"
            borderRadius="8px"
          >
            <Text textAlign="left" mb="3">
              Are you ready to create a new Fear Mountain?
            </Text>
            <Button colorScheme="blue">
              <Link to="/newladder">Create new Fear Mountain</Link>
            </Button>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            p={"8"}
            border="1px solid rgb(226, 232, 240)"
            borderRadius="8px"
            mb="4"
          >
            <Text textAlign="left" mb="3">
              Check out how you are progressing on your Fear Ladders!
            </Text>
            <Button colorScheme="blue">
              <Link to="/ladders">Go to My Ladders</Link>
            </Button>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            p={"8"}
            border="1px solid rgb(226, 232, 240)"
            borderRadius="8px"
            mb="4"
          >
            <Text textAlign="left" mb="3">
              Other people are facing their fears too. Browse around and join the conversation!
            </Text>
            <Button colorScheme="blue">Start browsing</Button>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            p={"8"}
            border="1px solid rgb(226, 232, 240)"
            borderRadius="8px"
            mb="4"
          >
            <Text textAlign="left" mb="3" fontWeight="bold">
              Following
            </Text>
            <Following following={data.getMyProfile.following} />
          </Box>
        </GridItem>
      </Grid>
    </Layout>
  )
}

export default Home
