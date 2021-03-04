import React from "react"

import { Flex } from "@chakra-ui/react"

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      position="fixed"
      backgroundColor="white"
      zIndex={100}
      left={0}
      right={0}
      {...props}
    >
      <Flex
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        pt={8}
        pl={8}
        pr={8}
        ml="auto"
        mr="auto"
        maxWidth="5xl"
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default NavBarContainer
