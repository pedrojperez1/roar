import React, { useState } from "react"
import { useParams, Link as ReactRouterLink, useLocation } from "react-router-dom"
import Assignments from "./Assignments"
import Loading from "../Loading/Loading"
import LadderLevelTitle from "./MountainLevelTitle"
import { useQuery } from "@apollo/client"
import { LADDER_QUERY } from "../../queries/ladders"
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Heading,
  Container,
  Box,
  Flex,
  Link,
  Button
} from "@chakra-ui/react"
import Layout from "../Layout/Layout"
import queryString from "query-string"
import NewMountainModal from "../NewMountainForm/NewMountainModal"
import NotFound from "../NotFound"

const Mountain = () => {
  const { id } = useParams()
  const { search } = useLocation()
  const query = queryString.parse(search)
  const [open, setOpen] = useState(query.q === "form")
  const close = () => setOpen(false)
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

  if (!data.ladders[0]) return <NotFound /> // return 404 if id does not exist

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
    <>
      <NewMountainModal isOpen={open} onClose={close}/>
      <Layout>
        <Flex justifyContent="center" alignItems="center">
          <Container>
            <Flex mb="10" justifyContent="space-between" alignItems="center">
              <Heading textAlign="left" size="2xl">
                {ladder.name}
              </Heading>
              <Button colorScheme="purple">
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  as={ReactRouterLink}
                  to="/mountains/new"
                  colorScheme="telegram"
                >
                  Add New Mountain
                </Link>
              </Button>
            </Flex>
            {levels.map(level => (
              <Box key={level} mb="3" boxShadow="lg">
                <Flex flexDirection="column" borderWidth="1px" borderRadius="8px">
                  <Accordion allowToggle>
                    <AccordionItem>
                      {({ isExpanded }) => (
                        <>
                          <LadderLevelTitle
                            level={level[5]}
                            task={ladder[level]}
                            isExpanded={isExpanded}
                            progress={getLevelProgress(ladder[level])}
                            ladderId={id}
                            refetch={refetch}
                          />

                          <AccordionPanel paddingLeft="8" paddingRight="8" pb={4}>
                            <Assignments
                              assignments={getLevelAssignments(ladder[level])}
                              refetch={refetch}
                            />
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  </Accordion>
                </Flex>
              </Box>
            ))}
          </Container>
        </Flex>
      </Layout>
    </>
  )
}

export default Mountain
