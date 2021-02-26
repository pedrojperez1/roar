import React from "react"
import { Text, Heading } from "@chakra-ui/react"
import UserList from "./UserList"

const FollowingUsers = ({ users, refetch, setSelectedUser }) => {
  return (
    <div className="FollowingUsers">
      <Heading
        fontSize="24px"
        mb={5}
        pb="10px"
        style={{ borderBottom: "1px solid rgb(226, 232, 240)", textAlign: "left" }}
      >
        Following Users
      </Heading>
      {users.length === 0 ? (
        <Text>No Followers yet</Text>
      ) : (
        <UserList
          users={users}
          type="following"
          refetch={refetch}
          setSelectedUser={setSelectedUser}
        />
      )}
    </div>
  )
}

export default FollowingUsers
