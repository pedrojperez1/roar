import React from "react"
import { Link } from "react-router-dom"
import { Image, Flex, Box, Heading, Button, Text, Center } from "@chakra-ui/react"
import hero from "../../img/hero.png"
import LandingPageCard from "./LandingPageCard"
import Layout from "../Layout/Layout"
import { faPencilAlt, faTasks, faAward } from "@fortawesome/free-solid-svg-icons"

const LandingPage = () => {
  return (
    <Layout mb="10" maxWidth="5xl">
      <Flex
        flexDirection={["column-reverse", "row"]}
        justifyContent={{ sm: "center", md: "space-between" }}
        alignItems="center"
        mb="8"
      >
        <Box maxWidth="350px" textAlign="left">
          <Heading mb="5">Making personal growth accessible</Heading>
          <Text mb="5" color="color.gray500">
            Roar is a tool to help you overcome your fears in a safe and supervised environment.
          </Text>
          <p className="lead">
            <Button colorScheme="purple">
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
        flexDirection={["column", "row"]}
        justifyContent={["center", "space-between"]}
      >
        <LandingPageCard
          cardIcon={faPencilAlt}
          cardTitle={"Build your plan"}
          cardText="Either on your own or with the help of a professional, build a custom plan to conquer
            your fears"
        />
        <LandingPageCard
          cardIcon={faTasks}
          cardTitle={"Complete assignments"}
          cardText="Work through your fears and complete assignments and win achievements along the way"
        />

        <LandingPageCard
          cardIcon={faAward}
          cardTitle={"Conquer Your Fear"}
          cardText="The ultimate goal is for your to conquer your fear after all your tasks and to feel
          success"
        />
      </Flex>
      <Center>
        <Button variant="outline" colorScheme="purple" size="lg">
          <Link style={{ color: "#5A43F5", textDecoration: "none" }} to="/signup">
            Get Started
          </Link>
        </Button>
      </Center>
    </Layout>
  )
}

export default LandingPage
