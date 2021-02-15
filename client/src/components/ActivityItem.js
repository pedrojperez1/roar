import React from "react";
import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons"

const ActivityItem = ({task, level, removeActivity}) => {

    return (
        <div className="ActivityItem">
            <Box p={2} borderWidth="1px" borderRadius="md">
                <Flex>
                    <HStack spacing={5}>
                        <Box bg="#5A43F5" color="white" p={2} borderRadius="sm">
                            <Text>{`Level ${level}`}</Text>
                        </Box>
                        <Box>{task}</Box>
                    </HStack>
                    <Spacer />
                    {removeActivity && <Box as="button" pr={2} onClick={() => removeActivity(task)}><CloseIcon /></Box>}
                    
                </Flex>
            </Box>
        </div>
    )
};

export default ActivityItem;