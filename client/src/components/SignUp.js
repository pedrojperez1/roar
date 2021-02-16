import React, { useState } from "react"
import { Alert, AlertIcon, Box, CloseButton, Spacer, Stack } from "@chakra-ui/react"
import SignUpForm from "./SignUpForm"
import Layout from "./layout"

const SignUp = ({ setUser }) => {
  const [alert, setAlert] = useState("")
  return (
    <Layout>
      <Stack spacing={4}>
        {alert && (
          <Alert status="error">
            <AlertIcon />
            <Box flex="1" textAlign="center">
              {alert}
            </Box>
            <CloseButton position="absolute" right="8px" top="8px" onClick={() => setAlert("")} />
          </Alert>
        )}
        <Spacer />
        <SignUpForm setUser={setUser} setAlert={setAlert} />
      </Stack>
    </Layout>
  )
}

export default SignUp
