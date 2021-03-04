import React, { useState } from "react"
import { Text, Heading, HStack, Spacer, InputRightAddon, InputGroup, Input, Center, Button, Stack } from "@chakra-ui/react"
import UserList from "../UserList/UserList"
import { Search2Icon } from "@chakra-ui/icons"

const FollowingUsers = ({ users, refetch }) => {
  const [showUsers, setShowUsers] = useState(users.slice(0, 5))
  console.log("showUsers", showUsers)
  const handleSearch = e => {
    console.log(e.target.value)
    const filtered = users.filter(u => u.username.includes(e.target.value))
    setShowUsers(filtered.slice(0, 5))
  }
  return (
    <div className="FollowingUsers">
      <HStack spacing={10}
        mb={5}
        pb="10px"
        style={{ borderBottom: "1px solid rgb(226, 232, 240)", textAlign: "left" }}
      >
        <Heading fontSize="24px">Following</Heading>
        <Spacer />
        <InputGroup>
          <Input onChange={handleSearch}/>
          <InputRightAddon><Search2Icon /></InputRightAddon>
        </InputGroup>
      </HStack>
      <Stack spacing={5}>
        {users.length === 0 ? (
          <Text>No Followers yet</Text>
        ) : (
          <UserList
            users={showUsers}
            type="following"
            refetch={refetch}
          />
        )}
        {
          showUsers.length > 4 &&
          <Center>
            <Button size="sm" variant="ghost" colorScheme="purple">See more</Button>
          </Center>
        }
      </Stack>
      
    </div>
  )
}

export default FollowingUsers
