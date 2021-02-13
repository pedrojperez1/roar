import React from "react"
import { Box } from "@chakra-ui/react"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      <FontAwesomeIcon size="2x" icon={isOpen ? faTimes : faBars} />
    </Box>
  )
}

export default MenuToggle
