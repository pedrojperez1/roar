import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { COMPLETE_ASSIGNMENT_MUTATION } from "../../queries/assignments"
import MarkCompleteModalForm from "./MarkCompleteModalForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { ADD_FEED_POST } from "../../queries/feeds"
import {
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  Text,
} from "@chakra-ui/react"

const MarkComplete = ({ assignmentId, level, refetch, completed }) => {
  const [isCompleted, setIsCompleted] = useState(completed)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [postUpdateToFeed] = useMutation(ADD_FEED_POST, {
    variables: {
      content: `completed a level ${level} task`,
      type: "system",
    },
  })

  const [markComplete] = useMutation(COMPLETE_ASSIGNMENT_MUTATION, {
    variables: { id: assignmentId },
    onCompleted: () => {
      refetch()
      setIsCompleted(true)
      postUpdateToFeed()
      onClose()
    },
  })

  const handleCancelOrClose = () => {
    setIsCompleted(false)
    onClose()
  }

  return (
    <div className="MarkComplete">
      {isCompleted ? (
        <Text fontWeight="bold">
          <FontAwesomeIcon color="green" icon={faCheckCircle} />
          <span style={{ marginLeft: "5px" }}>Complete</span>
        </Text>
      ) : (
        <Button variant="outline" size="sm" colorScheme="purple" onClick={onOpen}>
          Mark Complete
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={handleCancelOrClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rate your experience</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MarkCompleteModalForm />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" onClick={markComplete}>
              Mark Complete
            </Button>
            <Button ml="2" variant="ghost" onClick={handleCancelOrClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default MarkComplete
