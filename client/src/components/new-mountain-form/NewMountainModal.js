import React from "react"
import { 
  Button, 
  Center, 
  Heading, 
  Link, 
  Modal, 
  ModalBody, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay, 
  Stack, 
  Text 
} from "@chakra-ui/react"
import { Link as ReactRouterLink } from "react-router-dom"

const NewMountainModal = ({isOpen, onClose}) => {
  return (
    <div className="NewMountainModal">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mt={5}>
            <Stack>
              <Heading size="4xl">🚀</Heading>
              <Heading size="lg" textAlign="center">So, what's next?</Heading>
            </Stack>
          </ModalHeader>
          <ModalBody mb={5}>
            <Stack spacing={4}>
              <Text textAlign="center">
                Now that you have created your Fear Mountain, you can start with your exposures.
              </Text>
              <Text textAlign="center">
                We have created a schedule to keep you on track. Complete all the Tasks in each Base Camp to reach the Summit!
              </Text>
              <Text textAlign="center">
                If you want email reminders for upcoming tasks, head over to <Link as={ReactRouterLink} color="purple" to="/settings">Settings</Link> to enable those notifications.
              </Text>

            </Stack>
          </ModalBody>
          <Center>
          <ModalFooter mb={3}>
              <Button colorScheme="purple" onClick={onClose}>Close</Button>
          </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default NewMountainModal