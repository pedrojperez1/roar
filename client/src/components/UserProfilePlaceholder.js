import React from "react"
import chatting from "../img/chatting.png"
import { Flex, Image, Stack, Text } from "@chakra-ui/react"

const UserProfilePlaceholder = () => {
  return (
    <div className="UserProfilePlaceholder">
      <Stack spacing={5}>
        <Flex alignItems="center" flexDirection="column">
          <Image src={chatting} alt="chatting" width="250px" />
          <Text mt="4" as="i" fontWeight="bold" fontSize="lg">
            Select a user from the list to view their profile
          </Text>
        </Flex>
      </Stack>
    </div>
  )
}

export default UserProfilePlaceholder
