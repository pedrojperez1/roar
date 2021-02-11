import React from "react"
import { Heading, Box, Flex } from "@chakra-ui/react"

const Achievements = () => {
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
        <Box p="5" border="1px solid rgb(226, 232, 240)" borderRadius="8px">
          <p>Achievement 1</p>
        </Box>
        <Box p="5" border="1px solid rgb(226, 232, 240)" borderRadius="8px">
          <p>Achievement 2</p>
        </Box>
        <Box p="5" border="1px solid rgb(226, 232, 240)" borderRadius="8px">
          <p>Achievement 3</p>
        </Box>
      </Flex>
    </Box>
  )
}

export default Achievements
