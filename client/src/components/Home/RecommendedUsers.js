import React from "react"
import { Heading } from "@chakra-ui/react"
import UserList from "../UserList/UserList"

const RecommendedUsers = ({ users, refetch }) => {
  return (
    <div
      style={{ border: "1px solid #E2E8F0", borderRadius: "8px", padding: "20px" }}
      className="RecommendedUsers"
    >
      <Heading fontSize="24px" mb={5} pb="10px" style={{ textAlign: "left" }}>
        Recommended
      </Heading>
      <UserList users={users} refetch={refetch} type="recommended" />
    </div>
  )
}

export default RecommendedUsers
