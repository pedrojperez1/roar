import React from "react"
import { Link } from "react-router-dom"
import { Text } from "@chakra-ui/react"

const MenuItem = ({ children, isLast, to = "/", ...props }) => {
  return (
    <Link to={to}>
      <Text display="block" {...props}>
        {children}
      </Text>
    </Link>
  )
}

export default MenuItem
