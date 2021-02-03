import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, UncontrolledCollapse } from "reactstrap"
import Assignments from "./Assignments"
import Loading from "./Loading"
import LadderLevelTitle from "./LadderLevelTitle"
import { useQuery } from "@apollo/client"
import { LADDER_QUERY } from "../queries/ladders"
import { Heading, Container, Box, Flex, Button, Link } from "@chakra-ui/react"
import { Link as ReactRouterLink } from "react-router-dom"

const Ladder = () => {
  const { id } = useParams()
  const { loading, error, data, refetch } = useQuery(LADDER_QUERY, {
    variables: {
      id: Number(id),
    },
  })
  if (loading) return <Loading />
  if (error) {
    console.log("error", error)
    return `Something went wrong! ${error.message}`
  }
  const ladder = data.ladders[0]
  const levels = Object.keys(ladder).filter(key => {
    return key.includes("level") && ladder[key]
  })
  const assignments = ladder.assignments

  function getLevelAssignments(levelTask) {
    return assignments.filter(a => a.task === levelTask)
  }

  function getLevelProgress(levelTask) {
    const levelAssignments = assignments.filter(a => a.task === levelTask)
    const progress = levelAssignments.reduce((sum, next) => {
      return next.completed ? (sum += 1) : sum
    }, 0)
    return (progress / levelAssignments.length) * 100
  }
  return (
    <Flex justifyContent="center" alignItems="center">
      <Container>
        <Flex mb="10" justifyContent="space-between" alignItems="center">
          <Heading textAlign="left" size="2xl">
            {ladder.name}
          </Heading>

          <Link as={ReactRouterLink} to="/newladder" colorScheme="telegram">
            Add New Mountain
          </Link>
        </Flex>
        {levels.map(level => (
          <Box mb="3" boxShadow="md">
            <Flex flexDirection="column" borderWidth="1px" borderRadius="8px">
              <Box tag="button" id={`toggler${level}`} action>
                <LadderLevelTitle
                  level={level[5]}
                  task={ladder[level]}
                  progress={getLevelProgress(ladder[level])}
                />
              </Box>

              <UncontrolledCollapse toggler={`#toggler${level}`}>
                <Card>
                  <CardBody>
                    <Assignments
                      assignments={getLevelAssignments(ladder[level])}
                      refetch={refetch}
                    />
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </Flex>
          </Box>
        ))}
      </Container>
    </Flex>
  )
}

export default Ladder
