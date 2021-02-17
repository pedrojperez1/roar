import React from "react"

import FollowingUser from "./FollowingUser"
import { Avatar, AvatarGroup, Box, Flex, LinkBox, LinkOverlay } from "@chakra-ui/react"

const Following = ({ following }) => {
  return (
    <Flex>
      {following.length === 0 ? (
        <p>No follows... yet.</p>
      ) : (
        <AvatarGroup max={3}>
          { following.map(f => (
            <LinkBox key={f.username}>
              <LinkOverlay href={`/u/${f.username}`}>
                <Avatar name={f.username} src={f.profileImage}/>
              </LinkOverlay>
            </LinkBox>
          ))}
        </AvatarGroup>
        // <Box>
        //   <Box>
        //     {following.map(f => (
        //       <FollowingUser key={f.username} username={f.username} profileImage={f.profileImage} />
        //     ))}
        //   </Box>
        // </Box>
      )}
    </Flex>
  )
}

export default Following
