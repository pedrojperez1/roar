import React from "react"

import { Flex } from "@chakra-ui/react"

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      pb={8}
      pt={8}
      maxWidth="992px"
      ml="auto"
      mr="auto"
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavBarContainer
