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
          maxW={["100%", "170px"]}
          p="4"
          flexDirection="column"
          borderRadius="xl"
          // color="white"
          // bgColor="pink.500"
          boxShadow="lg"
          bgColor="gray.50"
          mr="5"
          mb="5"
        >
          <p>Completed tasks</p>
          <Heading fontSize="2xl">{tasksCompleted}</Heading>
        </Box>
        <Box
          maxW={["100%", "170px"]}
          p="4"
          flexDirection="column"
          borderRadius="xl"
          // color="white"
          // bgColor="cyan.500"
          boxShadow="lg"
          bgColor="gray.50"
          mr="5"
          mb="5"
        >
          <p>Next task due</p>
          <Heading fontSize="2xl">{getNextDueDate(ladders)}</Heading>
        </Box>
        <Box
          maxW={["100%", "170px"]}
          p="4"
          flexDirection="column"
          borderRadius="xl"
          // color="white"
          // bgColor="orange.500"
          boxShadow="lg"
          bgColor="gray.50"
          mr="5"
          mb="5"
        >
          <p>Mountains climbed</p>
          <Heading fontSize="2xl">{ladders.length}</Heading>
        </Box>
      </Flex>
    </Box>
  )
}

export default Statistics
