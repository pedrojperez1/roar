import React from "react"
import Layout from "../Layout/Layout"
import lesley from "../../img/IMG_3008.jpg"
import pedro from "../../img/IMG_2622.jpg"
import manny from "../../img/IMG_0001.jpeg"
import whoWeAre from "../../img/who-we-are.png"
import { Box, Text, Heading, Image, Flex, VStack } from "@chakra-ui/react"

const About = () => {
  return (
    <Layout width="2xl">
      <Box mb="30px">
        <Heading mb="18px" className="display-3">
          Who are we?
        </Heading>
        <Text color="gray.600" fontSize="24px">
          We are an interdisciplinary team of psychologists and technologists working together to
          help people conquer their fears.
        </Text>
        <Box display="flex" alignItems="center">
          <Image maxWidth="600px" width="100%" src={whoWeAre} />
        </Box>
      </Box>
      <Box>
        <VStack mb="16" spacing="4">
          <p className="text-left lead">
            Everyone has experienced anxiety at some point. Although some amount of anxiety is
            normal, even helpful, too much anxiety can stop us from living the life that we want to
            live. When we get to the point where we feel that anxiety is making our choices for us,
            it can be helpful to seek out help.
          </p>
          <p className="text-left lead">
            One of the most effective tools we have for fighting anxiety is exposure therapy, but it
            can be difficult to access. Our mission is to put the power of exposure therapy at your
            fingertips.
          </p>
          <p className="text-left lead">
            We have created this tool in the hopes that it will help people who are interested in
            tackling a fear using evidence-based practices. We also hope that our platform can be a
            helpful tool for clinicians who are interested in integrating exposure therapy into
            their work.
          </p>
        </VStack>
        <Flex mb="28" justify="center" align="center" wrap="wrap">
          <Box my="5" mx="7">
            <Image
              objectFit="cover"
              borderRadius="full"
              boxSize="180px"
              src={lesley}
              alt="Lesley"
            />
            <Text fontWeight="bold" fontSize="20px">
              Lesley Norris
            </Text>
            <Text>Clinical Psychologist</Text>
          </Box>
          <Box my="5" mx="7">
            <Image objectFit="cover" borderRadius="full" boxSize="180px" src={pedro} alt="Lesley" />
            <Text fontWeight="bold" fontSize="20px">
              Pedro Pérez
            </Text>
            <Text>Lead Software Engineer</Text>
          </Box>
          <Box my="5" mx="7">
            <Image objectFit="cover" borderRadius="full" boxSize="180px" src={manny} alt="Lesley" />
            <Text fontWeight="bold" fontSize="20px">
              Manny Carrera
            </Text>
            <Text>Lead UI/UX Engineer</Text>
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export default About
