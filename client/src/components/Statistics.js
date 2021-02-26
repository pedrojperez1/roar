import React from "react"
import dayjs from "dayjs"
import { Flex, Box, Heading } from "@chakra-ui/react"

const Statistics = ({ ladders }) => {
  const tasksCompleted = ladders.reduce(
    (total, next) => (total += next.assignments.filter(a => a.completed).length),
    0
  )

  const getNextDueDate = ladders => {
    let allTasks = []
    for (const ladder of ladders) {
      allTasks = allTasks.concat(
        ladder.assignments.filter(a => !a.completed && dayjs(a.dueDate) > dayjs())
      )
    }
    allTasks.sort((a, b) => dayjs(a) - dayjs(b))
    return allTasks.length === 0 ? "n/a" : dayjs(allTasks[0].dueDate).format("ddd MMM D")
  }

  return (
    <Box mb="8">
      <Heading
        fontSize="24px"
        pb="10px"
        style={{ borderBottom: "1px solid rgb(226, 232, 240)", textAlign: "left" }}
        mb="6"
      >
        Statistics
      </Heading>

      <Flex flexDirection={["column", "row"]}>
        <Box
          maxW={["100%", "172px"]}
          p="4"
          flexDirection="column"
          borderRadius="xl"
          mr="5"
          mb="5"
          border="1px solid rgb(226, 232, 240)"
        >
          <Heading fontSize="2xl">{tasksCompleted}</Heading>
          <p>Completed tasks</p>
        </Box>
        <Box
          maxW={["100%", "172px"]}
          p="4"
          flexDirection="column"
          borderRadius="xl"
          border="1px solid rgb(226, 232, 240)"
          mr="5"
          mb="5"
          justifyContent="center"
        >
          <Heading fontSize="2xl">{getNextDueDate(ladders)}</Heading>
          <p>Next task due</p>
        </Box>
        <Box
          maxW={["100%", "172px"]}
          p="4"
          flexDirection="column"
          borderRadius="xl"
          border="1px solid rgb(226, 232, 240)"
          mr="5"
          mb="5"
        >
          <Heading fontSize="2xl">{ladders.length}</Heading>
          <p>Mountains climbed</p>
        </Box>
      </Flex>
    </Box>
  )
}

export default Statistics
