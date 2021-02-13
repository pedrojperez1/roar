import React from "react"
import { Link } from "react-router-dom"
import { Box, Text } from "@chakra-ui/react"

const Logo = ({ ...props }) => {
  return (
    <Box {...props}>
      <Text color="purple.600" fontSize="lg" fontWeight="bold">
        <Link to="/">Roar</Link>
      </Text>
    </Box>
  )
}

export default Logo
