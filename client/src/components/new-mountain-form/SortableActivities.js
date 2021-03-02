import { Box, Center, Text } from "@chakra-ui/react"
import React from "react"
import { SortableElement, SortableContainer } from "react-sortable-hoc"

const SortableItem = SortableElement(({item}) => (
  <Box 
    color="#805AD5" 
    mb={1} mr={1} pl={3} py={2} my={3}
    borderWidth="1px" 
    borderRadius="lg"
    boxShadow="lg"
  >
    <Center mr={4}>
      <Text fontWeight="bold">
        {item.task}
      </Text>
    </Center>
  </Box>
))
const SortableActivities = SortableContainer(({items}) => (
  <ul>
    {items.map((item, index) => (
      <SortableItem key={`item-${item.task}`} index={index} item={item} />
    ))}
  </ul>
))

export default SortableActivities