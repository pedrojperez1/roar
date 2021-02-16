import React from "react"
import { Formik, Form, Field } from "formik"
import {
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Flex,
  Box,
  Heading,
  InputGroup,
  Stack,
  Spacer,
} from "@chakra-ui/react"
import { useMutation } from "@apollo/client"
import { SIGNUP_MUTATION } from "../queries/users"
import { useHistory } from "react-router-dom"

const SignUpForm = ({ setUser, setAlert }) => {
  const validateUsername = value => {
    let error
    if (!value) {
      error = "Username is required"
    }
    return error
  }
  const validatePassword = value => {
    let error
    if (!value) {
      error = "Password is required"
    } else if (value.length < 8) {
      error = "Password must be 8 characters long."
    } else if (!/\d/.test(value)) {
      error = "Password must contain a number."
    }
    return error
  }

  const validateRetype = value => {
    let error
    if (!value) {
      error = "Please confirm your password."
    }
    return error
  }
  const history = useHistory()
  const [signup] = useMutation(SIGNUP_MUTATION)

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Sign Up</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <Formik
            initialValues={{ username: "", password: "", retype: "" }}
            onSubmit={async (values, actions) => {
              if (values.password !== values.retype) {
                actions.setFieldError("retype", "Your passwords do not match.")
                actions.setSubmitting(false)
              } else {
                try {
                  const data = await signup({
                    variables: {
                      username: values.username,
                      password: values.password,
                    },
                  })
                  console.log(data)
                  if (data.data.addUser.token) {
                    setUser(data.data.addUser.token)
                    history.push("/home")
                  }
                } catch (e) {
                  if (e.toString().includes("Error: Validation error")) {
                    actions.setFieldError("username", "Username is taken.")
                  } else {
                    setAlert("Something went wrong. Please try again.")
                  }
                }
              }
            }}
          >
            {props => (
              <Form>
                <Stack spacing={4}>
                  <Field name="username" validate={validateUsername}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.username && form.touched.username}>
                        <Input {...field} id="username" variant="flushed" placeholder="Username" />
                        <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password" validate={validatePassword}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.password && form.touched.password}>
                        <InputGroup>
                          <Input
                            {...field}
                            id="password"
                            type="password"
                            variant="flushed"
                            placeholder="Password"
                          />
                        </InputGroup>
                        <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="retype" validate={validateRetype}>
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.retype && form.touched.retype}>
                        <InputGroup>
                          <Input
                            {...field}
                            id="retype"
                            type="password"
                            variant="flushed"
                            placeholder="Re-type password"
                          />
                        </InputGroup>
                        <FormErrorMessage>{form.errors.retype}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Spacer />
                  <Button
                    mt={4}
                    width="full"
                    colorScheme="purple"
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Sign up
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

export default SignUpForm
