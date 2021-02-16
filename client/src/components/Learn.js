import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"
import Layout from "./layout"

const Learn = () => {
  return (
    <Layout width="2xl">
      <Box mb="30px">
        <Heading mb="18px" className="display-3">
          What is exposure therapy?
        </Heading>
        <Text color="gray.600" fontSize="24px">
          Exposure therapy is a tool used in cognitive behavioral therapy which has been shown to
          help treat anxiety.
        </Text>
      </Box>
      <Box>
        <VStack>
          <p className="text-left lead">
            To understand exposure therapy, you first have to understand how anxiety works. When
            we’re in an anxiety-provoking situation, we feel anxious in our bodies, our thoughts
            race and all we want to do is run away and hide. Often, we’ll let our anxiety run the
            show and do what it’s telling us to do - we’ll run away! This makes us feel better right
            away. But long term what this teaches us is that the only way to handle our worries is
            to avoid the situation, be that by running away or relying on some kind of “safety
            blanket” to get us through. It becomes this vicious cycle that’s really hard to get out
            of.
          </p>
          <p className="text-left lead">
            This is where exposure therapy comes in. In a gradual way, we slowly put ourselves in
            situations that make us feel anxious, without listening when anxiety tells us to run
            away. This gives us a chance to learn one of two things: (1) hey, this wasn’t as bad as
            my anxiety said it would be! Or (2) this was not so much fun, but wow look at what I can
            handle.
          </p>
          <p className="text-left lead">
            Suppose Jane has a fear of dogs. Her friend Max has a beautiful golden retreiver, but
            Jane has learned that the only way to handle this fear is to avoid Max's house. An
            exposure therapist would have Jane create a very specific list of all the things that my
            fear of dogs has stopped me from doing, order these things from least to most scary and
            then do one step of this “ladder” per week. Jane might start by looking at pictures of a
            dog for 10 minutes every day for a week. Then, Jane might start watching a YouTube clip
            of a dog every day for 10 minutes for a week. Finally, Jane might work up to walking
            past the dog park three times per week.
          </p>
          <p className="text-left lead">
            You can think of it as slowly walking into a cold pool. You’ll go one step at a time,
            not taking the next step until you’ve gotten used to the temperature of the water.
          </p>
          <p className="mt-5 h4">Interested? Start by building you own fear ladder.</p>
          <Button variant="outline" colorScheme="purple" size="lg">
            <Link style={{textDecoration: "none" }} to="/mountains/new">
              Get Started
            </Link>
          </Button>
        </VStack>
      </Box>
    </Layout>
  )
}

export default Learn
