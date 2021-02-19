import React from "react"
import chatting from "../img/chatting.png"
import { Center, Image, Stack, Text } from "@chakra-ui/react"

const UserProfilePlaceholder = () => {
  return (
    <div className="UserProfilePlaceholder">
        <Stack spacing={5} >
          <Center>
            <Text as="i" fontWeight="bold" fontSize="lg">Select a user from the list to view their profile</Text>
          </Center>
          <Center>
            <Image src={chatting} alt="chatting" width="250px"/>
          </Center>
        </Stack>

    </div>
  )
}

export default UserProfilePlaceholder