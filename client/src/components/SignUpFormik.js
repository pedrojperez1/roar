import React from "react"
import { Formik, Form, Field } from "formik"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Flex, 
  Box, 
  Heading,
  InputGroup,
  Stack
} from "@chakra-ui/react"
import { useApolloClient, useMutation } from "@apollo/client"
import { SIGNUP_MUTATION } from "../queries/users"
import { useHistory } from "react-router-dom"

const SignUpFormik = ({setUser}) => {
    const validateUsername = (value) => {
      let error
      if (!value) {
        error = "Username is required"
      }
      return error
    }
    const validatePassword = (value) => {
      let error
      if (!value) {
        error = "Password is required"
      } else if (value.length < 6) {
        error = "Password must be 6 characters long."
      }
      return error
    }

    const validateRetype = (value) => {
      let error
      if (!value) {
        error = "Please confirm your password."
      }
    }
    const history = useHistory()
    const client = useApolloClient()
    const [signup] = useMutation(SIGNUP_MUTATION)
  
    return (
      <Flex width="full" align="center" justifyContent="center">
        <Box p={8} maxWidth="700px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <Formik
              initialValues={{ username: "", password: "", retype: "" }}
              onSubmit={(values, actions) => {
                signup({
                  variables: {
                    username: values.username, 
                    password: values.password
                  }
                }).then((data) => {
                  setUser(data.data.addUser.token)
                  history.push("/home")
                })
                
              }}
            >
              {(props) => (
                <Form>
                  <Stack spacing={4}>
                  <Field name="username" validate={validateUsername}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.username && form.touched.username}>
                        {/* <FormLabel htmlFor="username">Username</FormLabel> */}
                        <Input {...field} id="username" variant="flushed" placeholder="Username"/>
                        <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password" validate={validatePassword}>
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.password && form.touched.password}>
                        {/* <FormLabel htmlFor="password">Password</FormLabel> */}
                        <InputGroup>
                          <Input {...field} id="password" type="password" variant="flushed" placeholder="Password"/>
                        </InputGroup>
                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="retype" validate={validateRetype}>
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.retype && form.touched.retype}>
                        {/* <FormLabel htmlFor="password">Password</FormLabel> */}
                        <InputGroup>
                          <Input {...field} id="retype" type="password" variant="flushed" placeholder="Re-type password"/>>
                        </InputGroup>
                        <FormErrorMessage>{form.errors.retype}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt={4}
                    width="full"
                    variant="outline"
                    colorScheme="teal"
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Submit
                  </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Flex>
      
    )
  }

export default SignUpFormik