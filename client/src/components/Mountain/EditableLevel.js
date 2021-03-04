import React, { useState } from "react"
import {
  Editable,
  EditablePreview,
  EditableInput,
  IconButton,
  Flex,
  Box,
  Spacer,
  HStack,
  Tooltip,
} from "@chakra-ui/react"
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons"
import { useMutation } from "@apollo/client"
import { EDIT_LEVEL_MUTATION } from "../../queries/ladders"

const EditableLevel = ({ task, ladderId, level, refetch }) => {
  const [input, setInput] = useState("")
  const [editLevel] = useMutation(EDIT_LEVEL_MUTATION, {
    variables: {
      ladderId: Number(ladderId),
      level: Number(level),
      newLevelName: input,
    },
  })
  function EditableControls({ isEditing, onSubmit, onCancel, onEdit }) {
    const submitAction = () => {
      onSubmit()
      if (input) editLevel().then(() => refetch())
    }
    return isEditing ? (
      <HStack>
        <Tooltip label="Submit change" aria-label="Submit edit">
          <IconButton size="sm" icon={<CheckIcon />} onClick={submitAction} />
        </Tooltip>
        <Tooltip label="Cancel edit" aria-label="cancel edit">
          <IconButton size="sm" icon={<CloseIcon />} onClick={onCancel} />
        </Tooltip>
      </HStack>
    ) : (
      <IconButton size="sm" icon={<EditIcon />} onClick={onEdit} />
    )
  }

  return (
    <Tooltip label={`Edit ${task}`}>
      <Editable
        defaultValue={task}
        fontWeight="bold"
        fontSize="large"
        color="gray.500"
        isPreviewFocusable={false}
        submitOnBlur={false}
      >
        {props => (
          <>
            <Flex>
              <Box mr={4}>
                <EditablePreview />
                <EditableInput onChange={e => setInput(e.target.value)} />
              </Box>
              <Spacer />
              <Box>
                <EditableControls {...props} />
              </Box>
            </Flex>
          </>
        )}
      </Editable>
    </Tooltip>
  )
}

export default EditableLevel
