import React from "react"
import { Heading } from "@chakra-ui/react"
import UserList from "./UserList"

const RecommendedUsers = ({ users, refetch }) => {
  return (
    <div className="RecommendedUsers">
      <Heading
        fontSize="24px"
        mt={10}
        mb={5}
        pb="10px"
        style={{ borderBottom: "1px solid rgb(226, 232, 240)", textAlign: "left" }}
      >
        Recommended Users
      </Heading>
      <UserList users={users} refetch={refetch} type="recommended" />
    </div>
  )
}

export default RecommendedUsers
