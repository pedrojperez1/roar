import { useMutation } from "@apollo/client"
import { Box, Flex, Text, Avatar, Button, HStack, Spacer } from "@chakra-ui/react"
import React from "react"
import { FOLLOW_USER_MUTATION, UNFOLLOW_USER_MUTATION } from "../queries/users"

const UserListItem = ({username, profileImage, setSelectedUser, type, refetch}) => {
  const handleClick = () => {
    if (setSelectedUser) {
      setSelectedUser(username)
    }
  }

  const [follow] = useMutation(FOLLOW_USER_MUTATION, {
    variables: { username: username },
    onCompleted: () => {
      refetch()
    }
  });
  const [unfollow] = useMutation(UNFOLLOW_USER_MUTATION, {
      variables: { username: username },
      onCompleted: () => {
        refetch()
      }
  });

  return (
    <div className="UserListItem">
      <HStack>
        <Box as="button" onClick={handleClick}>
          <Flex>
            <Avatar src={profileImage} size="sm" mr={3}/>
            <Box>
              <Text>{username}</Text>
            </Box>
          </Flex>
        </Box>
        <Spacer />
        {
          type === "following" ? (
            <Button size="xs" onClick={unfollow}>Unfollow</Button>
          ) : (
            <Button size="xs" onClick={follow}>Follow</Button>
          )
        }

      </HStack>
    </div>
  )
}

export default UserListItem