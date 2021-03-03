import React from "react"

import { useQuery } from "@apollo/client"
import { Heading, Box, Flex, HStack, Image, Text } from "@chakra-ui/react"
import { GET_USER_ACHIEVEMENTS } from "../queries/achievements"
import Loading from "./Loading"
import AchievementItem from "./AchievementItem"
import empty from "../img/achievement-empty.png"

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
      <Flex justifyContent={data.getUserAchievements.length === 0 ? "center" : "space-between"}>
        {data.getUserAchievements.length === 0 ? (
          <Flex direction="column">
            <Image src={empty} />
            <Text textAlign="center" mt="4" as="i" fontWeight="bold" fontSize="lg">
              No Achievements yet!
            </Text>
          </Flex>
        ) : (
          <HStack flexWrap="wrap">
            {data.getUserAchievements.map(a => (
              <AchievementItem
                key={a.id}
                name={a.name}
                description={a.description}
                type={a.type}
                level={a.level}
              />
            ))}
          </HStack>
        )}
      </Flex>
    </Box>
  )
}

export default Achievements
