import React from "react"

import { Container } from "@chakra-ui/react"
import { motion } from "framer-motion"

const Layout = ({ children, width, ...props }) => {
  return (
    <Container p="8" pt="108px" maxWidth={width || "5xl"} {...props}>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
            y: -10,
          },
          pageAnimate: {
            opacity: 1,
            y: 0,
          },
        }}
      >
        {children}
      </motion.div>
    </Container>
  )
}

export default Layout
