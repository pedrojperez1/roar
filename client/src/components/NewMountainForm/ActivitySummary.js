import { Box, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ActivityItem from "./ActivityItem";

const ActivitySummary = ({newLadderData}) => {
    const activities = newLadderData.activities;
    const sortedActivities = [...activities].sort((a, b) => a.level - b.level);

    return (
        <div className="ActivitySummary">
            <Stack spacing={10}>
                <Flex>
                    <Box>
                        <Text>Summit</Text>
                    </Box>
                    <Spacer />
                    <Box w="75%">
                        <Text>{newLadderData.summit}</Text>
                    </Box>
                </Flex>
                <Flex>
                    <Box>
                        <Text>Base Camps</Text>
                    </Box>
                    <Spacer />
                    <Box w="75%">
                        <Stack spacing={3}>
                            { sortedActivities.map(activity => (
                                <ActivityItem
                                    key={activity.task}
                                    task={activity.task} 
                                    level={activity.level}
                                />
                            ))}
                        </Stack>
                    </Box>
                </Flex>
            </Stack>

        </div>
    )
};

export default ActivitySummary;