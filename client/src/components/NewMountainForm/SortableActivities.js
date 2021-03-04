import { Box, Text } from "@chakra-ui/react"
import React from "react"
import { SortableElement, SortableContainer } from "react-sortable-hoc"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGripVertical } from "@fortawesome/free-solid-svg-icons"

const SortableItem = SortableElement(({ item }) => (
  <Box
    color="#805AD5"
    mb={1}
    mr={1}
    pl={3}
    py={2}
    my={3}
    borderWidth="1px"
    borderRadius="lg"
    boxShadow="lg"
    cursor="grab"
  >
    <Box mr={4} display="flex" alignItems="center" justifyContent="space-between">
      <Text fontWeight="bold">{item.task}</Text>
      <FontAwesomeIcon icon={faGripVertical} />
    </Box>
  </Box>
))
const SortableActivities = SortableContainer(({ items }) => (
  <ul>
    {items.map((item, index) => (
      <SortableItem
        style={{ cursor: "grab" }}
        key={`item-${item.task}`}
        index={index}
        item={item}
      />
    ))}
  </ul>
))

export default SortableActivities
