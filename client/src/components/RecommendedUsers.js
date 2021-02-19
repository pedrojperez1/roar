import React from "react"
import { Text } from "@chakra-ui/react"
import UserList from "./UserList"

const RecommendedUsers = ({users, refetch}) => {

  return (
    <div className="RecommendedUsers">
      <Text fontSize="xl" mt={10} mb={5}>Recommended Users</Text>
      <UserList users={users} refetch={refetch} type="recommended" />
    </div>
  )
}

export default RecommendedUsers