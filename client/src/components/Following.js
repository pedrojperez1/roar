import React from "react"

import FollowingUser from "./FollowingUser"
import { Box, Flex } from "@chakra-ui/react"

const Following = ({ following }) => {
  return (
    <Box>
      <h1 className="font-weight-light">Following</h1>
      <Flex>
        {following.map(f => (
          <FollowingUser key={f.username} username={f.username} profileImage={f.profileImage} />
        ))}
      </Flex>
    </Box>
  )
}

export default Following
