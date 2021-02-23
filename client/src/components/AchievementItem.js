import React from "react"
import { Box, Flex, Heading, Spacer, Tooltip } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers, faCompass, faHiking, faCrown, faBullhorn } from '@fortawesome/free-solid-svg-icons'

const AchievementItem = ({name, description, type, level}) => {
  const colorLookup = {
    1: "orange.500",
    2: "cyan.500",
    3: "purple.500"
  }
  const getIcon = name => {
    switch (name) {
      case "Trooper":
        return faHiking
      case "Socialite":
        return faUsers
      case "Scout":
        return faCompass
      case "Town Crier":
        return faBullhorn
      case "Veteran":
        return faCrown
      default:
        return faUsers
    }
  }
  return (
    <div className="AchievementItem">
      <Tooltip label={description} aria-label={description}>
        <Box width="175px" bg={colorLookup[level]} color="white" py={3} borderRadius="xl" m={1} boxShadow="lg">
          <Flex direction="row" alignItems="center">
            <Flex direction="column" flexWrap="wrap" ml={4} alignItems="right">
              <Box>
                <Heading size="md">{name}</Heading>
              </Box>
              <Box>
                <Heading size="sm" color="gray.300">Level {level}</Heading>
              </Box>
            </Flex>
            <Spacer />
            <Box color="white" p={2} mr={2}>
              <FontAwesomeIcon icon={getIcon(name)} size="2x"/>
            </Box>
          </Flex>
        </Box>
      </Tooltip>
      


    </div>
  )
}

export default AchievementItem