import React from "react"

import { Container, Flex, Link, Text, Progress } from "@chakra-ui/react"

const LadderLevelTitle = ({ level, task, progress }) => {
  console.warn(progress)
  return (
    <Container p="16">
      <Flex mb="30px" alignItems="flex-start" flexDirection="column">
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          <Text fontSize="xl" fontWeight="bold">
            Level {level}
          </Text>
          <Link color="teal">View Sub Tasks</Link>
        </Flex>

        <Text fontWeight="bold" fontSize="large" color="gray.500">
          {task}
        </Text>
      </Flex>
      <Text textAlign="left">Task Done: {progress.toFixed(2)} / 100 %</Text>
      <Progress animated colorScheme="green" value={progress} />
    </Container>
  )
}

export default LadderLevelTitle
