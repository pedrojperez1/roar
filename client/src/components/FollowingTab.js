import React from "react"
import { Box, Container } from "@chakra-ui/react"
import RecommendedUsers from "./RecommendedUsers"
import FollowingUsers from "./FollowingUsers"
import Loading from "./Loading"
import { RECOMMENDED_USERS_QUERY, WHO_AM_I_FOLLOWING_QUERY } from "../queries/users"
import { useQuery } from "@apollo/client"

const FollowingTab = () => {
  const { loading: loadingF, error: errorF, data: dataF, refetch: refetchF } = useQuery(
    WHO_AM_I_FOLLOWING_QUERY
  )
  const { loading: loadingR, error: errorR, data: dataR, refetch: refetchR } = useQuery(
    RECOMMENDED_USERS_QUERY
  )
  const refetch = () => {
    refetchR()
    refetchF()
  }
  if (errorF || errorR) {
    console.log(errorF || errorR)
    return "Something went wrong. :("
  }
  return (
    <Container>
      <Box py={3} pr={["0", "10"]}>
        {loadingF ? (
          <Loading />
        ) : (
          <FollowingUsers
            users={dataF.getMyFollowing}
            refetch={refetch}
          />
        )}
        {loadingR ? (
          <Loading />
        ) : (
          <RecommendedUsers users={dataR.recommendedUsers} refetch={refetch} />
        )}
      </Box>
    </Container>

  )
}

export default FollowingTab
