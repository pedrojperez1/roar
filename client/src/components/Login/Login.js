import React, { useState } from "react"
import { Box, Stack, Alert, AlertIcon, CloseButton, Spacer } from "@chakra-ui/react"
import LoginForm from "./LoginForm"
import Layout from "../Layout/Layout"

const Login = ({ setUser }) => {
  const [alert, setAlert] = useState("")
  return (
    <Layout height="calc(100vh - 108px)" display="flex" justifyContent="center" alignItems="center">
      <Stack spacing={4}>
        {alert && (
          <Alert status="error">
            <AlertIcon />
            <Box flex="1" textAlign="center">
              {alert}

              <CloseButton position="absolute" right="8px" top="8px" onClick={() => setAlert("")} />
            </Box>
          </Alert>
        )}
        <Spacer />
        <LoginForm setUser={setUser} setAlert={setAlert} />
      </Stack>
    </Layout>
  )
}

export default Login
