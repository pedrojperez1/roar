import React, { useState } from "react"
import { Box, Flex } from "@chakra-ui/react"
import UserProfile from "./UserProfile"
import UserProfilePlaceholder from "./UserProfilePlaceholder"
import RecommendedUsers from "./RecommendedUsers"
import FollowingUsers from "./FollowingUsers"
import Loading from "./Loading"
import { RECOMMENDED_USERS_QUERY, WHO_AM_I_FOLLOWING_QUERY } from "../queries/users"
import { useQuery } from "@apollo/client"

const FollowingTab = () => {
  const [selectedUser, setSelectedUser] = useState()
  const { loading: loadingF, error: errorF, data: dataF, refetch: refetchF } = useQuery(WHO_AM_I_FOLLOWING_QUERY)
  const { loading: loadingR, error: errorR, data: dataR, refetch: refetchR } = useQuery(RECOMMENDED_USERS_QUERY)
  const refetch = () => {
    refetchR()
    refetchF()
  }
  if (errorF || errorR) {
    console.log(errorF || errorR)
    return "Something went wrong. :("
  }
  return (
    <Flex>
      <Box w="30%" py={3} pr={10}>
        {
          loadingF ? <Loading /> : <FollowingUsers users={dataF.getMyFollowing} refetch={refetch} setSelectedUser={setSelectedUser}/>
        }
        {
          loadingR ? <Loading /> : <RecommendedUsers users={dataR.recommendedUsers} refetch={refetch} />
        }
      </Box>
      <Box w="70%" py={3} pl={10}>
        {
          selectedUser ? <UserProfile username={selectedUser} refetchFollows={refetch} /> : <UserProfilePlaceholder />
        }
      </Box>
    </Flex>
  )
}

export default FollowingTab
