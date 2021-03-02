import React from "react"
import { CloseButton, Box, Flex, Spacer, Text } from "@chakra-ui/react"

const NewActivityItem = ({ task, removeActivity }) => {
  return (
    <div className="ActivityItem">
      <Box 
        color="#805AD5" 
        mb={1} mr={1} pl={3} py={2} 
        borderWidth="1px" 
        borderRadius="lg"
        boxShadow="lg"
      >
        <Flex>
          <Box mr={4}>
            <Text fontWeight="bold">
              {task}
            </Text>
          </Box>
          <Spacer />
          {removeActivity && (
            <CloseButton 
              size="sm" 
              onClick={() => removeActivity(task)}
            />
          )}
        </Flex>
      </Box>
    </div>
  )
}

export default NewActivityItem
