import React, { useState } from "react"
import { Editable, EditablePreview, EditableInput, IconButton, Flex, Box, Spacer } from "@chakra-ui/react"
import {CheckIcon, CloseIcon, EditIcon} from "@chakra-ui/icons"
import { ButtonGroup } from "reactstrap"
import { useMutation } from "@apollo/client"
import { EDIT_LEVEL_MUTATION } from "../queries/ladders"

const EditableLevel = ({task, ladderId, level, refetch}) => {
  const [input, setInput] = useState('')
  const [editLevel] = useMutation(EDIT_LEVEL_MUTATION, {
    variables: {
      ladderId: Number(ladderId),
      level: Number(level),
      newLevelName: input
    }
  })
  function EditableControls({ isEditing, onSubmit, onCancel, onEdit }) {
    const submitAction = () => {
      onSubmit()
      editLevel().then(() => refetch())
    }
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton size="sm" icon={<CheckIcon />} onClick={submitAction} />
        <IconButton size="sm" icon={<CloseIcon />} onClick={onCancel} />
      </ButtonGroup>
    ) : (
      
      <IconButton size="sm" icon={<EditIcon />} onClick={onEdit} />
      
    )
  }

  return (
    <div className="EditableLevel">
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
                <EditableInput onChange={e => setInput(e.target.value)}/>
              </Box>
              <Spacer />
              <Box>
                <EditableControls {...props} />
              </Box>
            </Flex>
            </>
          )}
          
        </Editable>
    </div>
  )
}

export default EditableLevel