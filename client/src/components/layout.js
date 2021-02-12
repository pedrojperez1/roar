import React from "react"

import { Container } from "@chakra-ui/react"
import { motion } from "framer-motion"

const Layout = ({ children, width, ...props }) => {
  return (
    <Container maxWidth={width || "4xl"} {...props}>
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
