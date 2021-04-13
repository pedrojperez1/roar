import React from "react"
import { Text, Heading, Center, Button, Stack } from "@chakra-ui/react"
import UserList from "../UserList/UserList"
import { useHistory } from "react-router-dom"

const FollowingUsers = ({ users, refetch, max, search }) => {
  const history = useHistory()

  return (
    <div
      style={{
        border: "1px solid #E2E8F0",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "20px",
      }}
      className="FollowingUsers"
    >
      <Heading fontSize="24px" mb={5} pb="10px" style={{ textAlign: "left" }}>
        Following
      </Heading>
      <Stack spacing={5}>
        {users.length === 0 ? (
          <Text>No Followers yet</Text>
        ) : (
          <UserList users={max ? users.slice(0, max) : users} type="following" refetch={refetch} />
        )}
        {users.length > 3 && max && (
          <Center>
            <Button
              size="sm"
              variant="ghost"
              colorScheme="purple"
              onClick={() => history.push("/following")}
            >
              See all
            </Button>
          </Center>
        )}
      </Stack>
    </div>
  )
}

export default FollowingUsers
