import React from "react"

import FollowingUser from "./FollowingUser"
import { Box, Flex } from "@chakra-ui/react"

const Following = ({ following }) => {
  return (
    <Flex>
      {following.length === 0 ? (
        <p>No follows... yet.</p>
      ) : (
        <Box>
          <Box>
            {following.map(f => (
              <FollowingUser key={f.username} username={f.username} profileImage={f.profileImage} />
            ))}
          </Box>
        </Box>
      )}
    </Flex>
  )
}

export default Following
