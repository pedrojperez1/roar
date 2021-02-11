import React from "react"

import { useQuery } from "@apollo/client"
import { Heading, Box, Flex } from "@chakra-ui/react"
import { GET_USER_ACHIEVEMENTS } from "../queries/achievements"
import Loading from "./Loading"

const Achievements = ({ username }) => {
  const { loading, error, data } = useQuery(GET_USER_ACHIEVEMENTS, {
    // eslint-disable-next-line no-undef
    variables: { username: username },
  })
  if (loading) return <Loading />
  if (error) return "Something bad happened :("

  return (
    <Box>
      <Heading
        fontSize="24px"
        style={{ borderBottom: "1px solid rgb(226, 232, 240)", textAlign: "left" }}
        mb="6"
        pb="10px"
      >
        Achievements
      </Heading>
      <Flex justifyContent="space-between">
        {data.getUserAchievements.length === 0 ? (
          <p>No achievements... yet!</p>
        ) : (
          <Box>
            {data.getUserAchievements.map(a => (
              <Box key={a.id}>
                <p>{a.name}</p>
              </Box>
            ))}
          </Box>
        )}
      </Flex>
    </Box>
  )
}

export default Achievements
