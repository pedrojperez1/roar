import React from "react"

import { Container, Flex, Link, Text, Progress, AccordionButton } from "@chakra-ui/react"

const LadderLevelTitle = ({ level, task, progress, isExpanded }) => {
  return (
    <Container p="8">
      <Flex mb="30px" alignItems="flex-start" flexDirection="column">
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          <Text fontSize="xl" fontWeight="bold">
            Level {level}
          </Text>

          <AccordionButton style={{ width: "auto", backgroundColor: "transparent" }} as={Link}>
            <>
              <Link color="purple.500">{isExpanded ? "Hide Sub Tasks" : "View Sub Tasks"}</Link>
            </>
          </AccordionButton>
        </Flex>

        <Text fontWeight="bold" fontSize="large" color="gray.500">
          {task}
        </Text>
      </Flex>
      <Text marginBottom="10px" fontWeight="bold" textAlign="left">
        Task Done: {progress.toFixed(2)} / 100 %
      </Text>
      <Progress animated colorScheme="green" value={progress} />
    </Container>
  )
}

export default LadderLevelTitle
