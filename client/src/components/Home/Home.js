import React from "react"
import { Link } from "react-router-dom"
import {
  FETCH_MY_PROFILE_QUERY,
  RECOMMENDED_USERS_QUERY,
  WHO_AM_I_FOLLOWING_QUERY,
} from "../../queries/users"
import Statistics from "./Statistics"
import Achievements from "../Achievements/Achievements"
import { useQuery } from "@apollo/client"
import Loading from "../Loading/Loading"
import genJoinDate from "../../helpers/genJoinDate"
import Layout from "../Layout/Layout"
import MountainList from "../Mountain/MountainList"
import {
  Heading,
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  Grid,
  GridItem,
} from "@chakra-ui/react"
import WelcomeModal from "./WelcomeModal"
import RecommendedUsers from "./RecommendedUsers"
import FollowingUsers from "./FollowingUsers"

const Home = () => {
  const { onClose } = useDisclosure()
  const { loading, error, data, refetch } = useQuery(FETCH_MY_PROFILE_QUERY)
  const { loading: loadingF, error: errorF, data: dataF, refetch: refetchF } = useQuery(
    WHO_AM_I_FOLLOWING_QUERY
  )
  const { loading: loadingR, error: errorR, data: dataR, refetch: refetchR } = useQuery(
    RECOMMENDED_USERS_QUERY
  )
  if (loading) return <Loading />
  if (error) {
    return `Something bad happened. ${error}`
  }

  const refetchFollowers = () => {
    refetchR()
    refetchF()
  }
  if (errorF || errorR) {
    console.log(errorF || errorR)
    return "Something went wrong. :("
  }
  return (
    <>
      <WelcomeModal isOpen={data.getMyProfile.isNew} onClose={onClose} refetch={refetch} />
      <Layout maxWidth="5xl">
        <Tabs colorScheme="purple" p="0">
          <TabList mb="8">
            <Tab>Home</Tab>
            <Tab>My Mountains</Tab>
            {/* <Tab>Following</Tab> */}
          </TabList>

          <TabPanels p="0">
            <TabPanel p="0">
              <Grid
                h="200px"
                templateRows="repeat(2, 1fr)"
                templateColumns={{ md: "repeat(5, 1fr)", sm: "repeat(1, 1fr)" }}
                gap={4}
              >
                <GridItem colSpan={3}>
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
                  </Box>
                  <Flex textAlign="left" flexDirection="column">
                    <Statistics ladders={data.getMyProfile.ladders} />
                    <Box>
                      <Achievements username={data.getMyProfile.username} />
                    </Box>
                  </Flex>
                </GridItem>
                <GridItem colSpan={2}>
                  <Box py={3} pr={["0", "10"]}>
                    {loadingF ? (
                      <Loading />
                    ) : (
                      <FollowingUsers
                        users={dataF.getMyFollowing}
                        refetch={refetchFollowers}
                        max={3}
                      />
                    )}
                    {loadingR ? (
                      <Loading />
                    ) : (
                      <RecommendedUsers users={dataR.recommendedUsers} refetch={refetchFollowers} />
                    )}
                  </Box>
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel p="0">
              <MountainList />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Layout>
    </>
  )
}

export default Home
