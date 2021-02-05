import React from "react"
import MarkComplete from "./MarkComplete"
import dayjs from "dayjs"
import { Flex, Box, Text } from "@chakra-ui/react"

const Assignments = ({ assignments, refetch }) => {
  const sorted = [...assignments].sort((a, b) => {
    return Date.parse(a.dueDate) - Date.parse(b.dueDate)
  })

  return (
    <Flex flexDirection="column">
      {sorted.map((a, idx) => (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          padding="10px"
          borderRadius="4px"
          backgroundColor={"#EDF2F7"}
          mb="2"
          key={a.id}
        >
          <Box textAlign="left">
            <Text fontSize="md" fontWeight="bold">
              Task {idx + 1}: {a.task}
            </Text>
            <Box color="gray.600">Due Date: {dayjs(a.dueDate).format("ddd, MMM DD, YYYY")}</Box>
          </Box>
          <Box>
            {<MarkComplete completed={a.completed} assignmentId={a.id} level={a.level} refetch={refetch} />}
          </Box>
        </Flex>
      ))}
    </Flex>
  )
}

export default Assignments
