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
import LadderList from "./LadderList"
import {
  Heading,
  Box,
  Button,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react"

const Home = () => {
  const { loading, error, data } = useQuery(FETCH_MY_PROFILE_QUERY)
  if (loading) return <Loading />
  if (error) {
    return `Something bad happened. ${error}`
  }

  return (
    <Layout maxWidth="5xl">
      <Tabs>
        <TabList>
          <Tab>Home</Tab>
          <Tab>My Mountains</Tab>
          <Tab>Following</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box display="flex" justifyContent="space-between" mb="4" textAlign="left">
              <Box>
                <Heading mb>
                  <Link to={`/u/${data.getMyProfile.username}`}>{data.getMyProfile.username}</Link>
                </Heading>
                <Box>
                  <p>Joined {genJoinDate(data.getMyProfile.createdAt)}</p>
                </Box>
              </Box>
              <Button colorScheme="purple">
                <Link style={{ color: "#fff", textDecoration: "none" }} to="/mountains/new">
                  Create new Fear Mountain
                </Link>
              </Button>
            </Box>
            <Flex textAlign="left" flexDirection="column">
              <Statistics ladders={data.getMyProfile.ladders} />
              <Box>
                <Achievements username={data.getMyProfile.username} />
              </Box>
            </Flex>
          </TabPanel>
          <TabPanel>
            <LadderList />
          </TabPanel>
          <TabPanel>
            <Following following={data.getMyProfile.following} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  )
}

export default Home
