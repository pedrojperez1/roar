import React from "react"
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom"
import { Container, Image, Flex, Box, Heading, Button, Text } from "@chakra-ui/react"
import hero from "../img/hero.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt, faTasks, faAward } from "@fortawesome/free-solid-svg-icons"

const LandingPage = () => {
  return (
    <Container mb="10" maxWidth="5xl">
      <Flex
        flexDirection={{ sm: "column-reverse", md: "row" }}
        justifyContent={{ sm: "center", md: "space-between" }}
        alignItems="center"
        mb="8"
      >
        <Box maxWidth="350px" textAlign="left">
          <Heading mb="5" className="display-2">
            Making personal growth accessible
          </Heading>
          <Text mb="5" color="color.gray500">
            Roar is a tool to help you overcome your fears in a safe and supervised environment.
          </Text>
          <p className="lead">
            <Button backgroundColor={"#5A43F5"} _hover={{ bg: "#4431C4" }} color="#fff">
              <Link style={{ color: "#fff", textDecoration: "none" }} to="/learn">
                Learn More
              </Link>
            </Button>
          </p>
        </Box>
        <Box>
          <Image width="550px" src={hero} alt="hero" />
        </Box>
      </Flex>
      <Flex mb="8" fontSize="32px" justifyContent="center">
        <Heading maxWidth="600px">We put the power of exposure therapy at your fingertips.</Heading>
      </Flex>
      <Flex
        mb="8"
        alignItems="center"
        flexDirection={{ sm: "column", md: "row" }}
        justifyContent={{ sm: "center", md: "space-between" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="275px"
          border="1px solid rgb(226, 232, 240)"
          borderRadius="8px"
          p="8"
          mb="4"
        >
          <Box mb="4" width="100px" borderRadius="full" backgroundColor="#f6f4ff" p="5">
            <FontAwesomeIcon color="#5A43F5" size="4x" icon={faPencilAlt} />
          </Box>
          <Text mb="4" fontWeight="bold">
            Build your plan
          </Text>
          <Text>
            Either on your own or with the help of a professional, build a custom plan to conquer
            your fears
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="275px"
          border="1px solid rgb(226, 232, 240)"
          borderRadius="8px"
          p="8"
          mb="4"
        >
          <Box mb="4" width="100px" borderRadius="full" backgroundColor="#f6f4ff" p="5">
            <FontAwesomeIcon color="#5A43F5" size="4x" icon={faTasks} />
          </Box>
          <Text mb="4" fontWeight="bold">
            Complete assignments
          </Text>
          <Text>
            Work through your fears and complete assignments and win achievements along the way
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="275px"
          border="1px solid rgb(226, 232, 240)"
          borderRadius="8px"
          p="8"
          mb="4"
        >
          <Box mb="4" width="100px" borderRadius="full" backgroundColor="#f6f4ff" p="5">
            <FontAwesomeIcon color="#5A43F5" size="4x" icon={faAward} />
          </Box>
          <Text mb="4" fontWeight="bold">
            Conquer Your Fear
          </Text>
          <Text>
            The ultimate goal is for your to conquer your fear after all your tasks and to feel
            success
          </Text>
        </Box>
      </Flex>

      <Button
        borderColor="#5A43F5"
        color="#5A43F5"
        variant="outline"
        _hover={{ bg: "#EBE8FF" }}
        block
        size="lg"
      >
        <Link style={{ color: "#5A43F5", textDecoration: "none" }} to="/signup">
          Get Started
        </Link>
      </Button>
    </Container>
  )
}

export default LandingPage
