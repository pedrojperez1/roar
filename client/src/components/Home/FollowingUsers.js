import React from "react"
import { Text, Heading, Center, Button, Stack } from "@chakra-ui/react"
import UserList from "../UserList/UserList"

const FollowingUsers = ({ users, refetch }) => {

  return (
    <div className="FollowingUsers">
      <Heading 
        fontSize="24px" 
        mb={5}
        pb="10px"
        style={{ borderBottom: "1px solid rgb(226, 232, 240)", textAlign: "left" }}
      >Following</Heading>
      <Stack spacing={5}>
        {users.length === 0 ? (
          <Text>No Followers yet</Text>
        ) : (
          <UserList
            users={users.slice(0, 3)}
            type="following"
            refetch={refetch}
          />
        )}
        {
          users.length > 3 &&
          <Center>
            <Button size="sm" variant="ghost" colorScheme="purple">See all</Button>
          </Center>
        }
      </Stack>
      
    </div>
  )
}

export default FollowingUsers
