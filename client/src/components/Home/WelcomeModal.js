import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import {
  Button,
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  HStack,
  Center,
  Stack,
  Heading,
} from "@chakra-ui/react"
import { SET_ISNEW_FALSE_MUTATION } from "../../queries/users"

const WelcomeModal = ({ isOpen, onClose, refetch }) => {
  const [step, setStep] = useState(1)
  const [setIsNewFalse] = useMutation(SET_ISNEW_FALSE_MUTATION)
  const closeModal = () => {
    setIsNewFalse().then(() => {
      onClose()
      refetch()
    })
  }
  const handleNext = () => {
    if (step < Object.keys(welcome).length) {
      setStep(step + 1)
    } else {
      closeModal()
    }
  }

  const welcome = {
    1: {
      message: "We are so happy you are here! Let's get you started with the app.",
      emoji: "🎉",
    },
    2: {
      message:
        "Soon, you will be redirected to your Home page. On your Home page, you can see how you are doing with your exposures and you can navigate to other parts of the app.",
      emoji: "🏠",
    },
    3: {
      message: "If you want to check your Fear Mountains, go to My Mountains.",
      emoji: "⛰️",
    },
    4: {
      message:
        "The Following tab shows you a list of other users you are following. This is a good place to find and connect with other users on the site that are tackling similar fears.",
      emoji: "👋",
    },
    5: {
      message: "Wondering where to start? Try creating your first Fear Mountain!",
      emoji: "🥳",
    },
  }
  return (
    <Modal size="lg" isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader my={5}>
          <Stack spacing={5}>
            <Heading textAlign="center" size="lg">Welcome to Roar!</Heading>
            <Center>
              <Heading size="4xl">{welcome[step].emoji}</Heading>
            </Center>
          </Stack>
        </ModalHeader>
        <ModalBody mb={3}>
          <Center>
            <Text textAlign="center">{welcome[step].message}</Text>
          </Center>
        </ModalBody>
        <ModalFooter justifyContent={step < Object.keys(welcome).length ? "flex-end" : "center"}>
          <HStack>
            {step < Object.keys(welcome).length ? (
              <Text>
                {step} / {Object.keys(welcome).length}
              </Text>
            ) : null}
            <Spacer />
            <Button colorScheme="purple" onClick={handleNext}>
              {step < Object.keys(welcome).length ? "Next" : "Finish"}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default WelcomeModal
