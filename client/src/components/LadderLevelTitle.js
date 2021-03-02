import React from "react"

import { Container, Flex, Link, Text, Progress, AccordionButton } from "@chakra-ui/react"
import EditableLevel from "./EditableLevel"

const progressMessage = {
  0: "Better get started!",
  33: "Keep going!",
  66: "Almost there!",
  100: "You're done! Awesome work!"
}

const LadderLevelTitle = ({ level, task, progress, isExpanded, ladderId, refetch }) => {
  return (
    <Container p="8">
      <Flex mb="30px" alignItems="flex-start" flexDirection="column">
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          <Text fontSize="xl" fontWeight="bold">
            Level {level}
          </Text>

          <AccordionButton style={{ width: "auto", backgroundColor: "transparent" }} as={Link}>
            <>
              <Link color="purple.500">{isExpanded ? "Hide Tasks" : "View Tasks"}</Link>
            </>
          </AccordionButton>
        </Flex>

        <EditableLevel task={task} ladderId={ladderId} level={level} refetch={refetch}/>
      </Flex>
      <Text marginBottom="10px" fontWeight="bold" textAlign="left">
        {/* Progress: {progress.toFixed(0)} / 100% */}
        {progressMessage[Math.floor(progress)]}
      </Text>
      <Progress animated colorScheme="green" value={progress} />
    </Container>
  )
}

export default LadderLevelTitle
