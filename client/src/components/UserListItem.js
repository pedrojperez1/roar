import React from "react"
import { useHistory } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { Box, Flex, Text, Avatar, Button, HStack, Spacer, Center, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react"
import { FOLLOW_USER_MUTATION, UNFOLLOW_USER_MUTATION } from "../queries/users"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"
const UserListItem = ({username, profileImage, type, refetch}) => {
  const history = useHistory()
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
      <Box px={7} py={2} borderWidth="1px" borderRadius="lg" boxShadow="md">
        <HStack>
          <Box as="button" onClick={() => history.push(`/u/${username}`)}>
            <Flex>
              <Avatar src={profileImage} size="md" mr={7}/>
              <Center>
                <Text fontWeight="bold">{username}</Text>
              </Center>
            </Flex>
          </Box>
          <Spacer />
          {
            type === "following" ? (
              <Menu>
                <MenuButton 
                  as={IconButton} 
                  icon={<FontAwesomeIcon icon={faEllipsisH} size="lg"/>} 
                  variant="ghost" 
                  colorScheme="purple"
                />
                <MenuList>
                  <MenuItem onClick={() => history.push(`/u/${username}`)}>Go to profile</MenuItem>
                  <MenuItem onClick={unfollow}>Unfollow</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button colorScheme="purple" variant="outline" size="sm" onClick={follow}>Follow</Button>
            )
          }

        </HStack>
      </Box>
    </div>
  )
}

export default UserListItem