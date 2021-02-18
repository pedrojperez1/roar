import React from "react"
import { Avatar, AvatarGroup, Flex, LinkBox, LinkOverlay } from "@chakra-ui/react"

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
      )}
    </Flex>
  )
}

export default Following
