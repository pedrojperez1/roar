import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Text } from "@chakra-ui/react"

const LandingPageCard = ({ cardTitle, cardIcon, cardText }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth={["100%", "200px", "200px", "275px"]}
      border="1px solid rgb(226, 232, 240)"
      borderRadius="8px"
      p="8"
      mb="4"
    >
      <Box mb="4" width="100px" borderRadius="full" backgroundColor="#f6f4ff" p="5">
        <FontAwesomeIcon color="#5A43F5" size="4x" icon={cardIcon} />
      </Box>
      <Text mb="4" fontWeight="bold">
        {cardTitle}
      </Text>
      <Text>{cardText}</Text>
    </Box>
  )
}

export default LandingPageCard
