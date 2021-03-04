import React from "react"
import { Link } from "react-router-dom"
import { FETCH_MY_PROFILE_QUERY } from "../../queries/users"
import Statistics from "./Statistics"
import Achievements from "../Achievements/Achievements"
import { useQuery } from "@apollo/client"
import FollowingTab from "./FollowingTab"
import Loading from "../Loading/Loading"
import genJoinDate from "../../helpers/genJoinDate"
import Layout from "../Layout/Layout"
import MountainList from "../Mountain/MountainList"
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
  useDisclosure,
} from "@chakra-ui/react"
import WelcomeModal from "./WelcomeModal"

const Home = () => {
  const { onClose } = useDisclosure()
  const { loading, error, data, refetch } = useQuery(FETCH_MY_PROFILE_QUERY)
  if (loading) return <Loading />
  if (error) {
    return `Something bad happened. ${error}`
  }
  return (
    <>
    <WelcomeModal isOpen={data.getMyProfile.isNew} onClose={onClose} refetch={refetch}/>
    <Layout maxWidth="5xl">
      <Tabs colorScheme="purple" p="0">
        <TabList mb="8">
          <Tab>Home</Tab>
          <Tab>My Mountains</Tab>
          <Tab>Following</Tab>
        </TabList>

        <TabPanels p="0">
          <TabPanel p="0">
            <Box
              display="flex"
              flexDirection={["column", "row"]}
              justifyContent="space-between"
              mb="8"
              textAlign="left"
            >
              <Box>
                <Heading>
                  <Link
                    style={{ textDecoration: "none", color: "#805AD5" }}
                    to={`/u/${data.getMyProfile.username}`}
                  >
                    {data.getMyProfile.username}
                  </Link>
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
          <TabPanel p="0">
            <MountainList />
          </TabPanel>
          <TabPanel p="0">
            <FollowingTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
    </>
  )
}

export default Home
