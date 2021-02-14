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
  InputRightElement,
  Text,
  Container,
  Stack
} from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

const LoginFormik = () => {
    const validateUsername = (value) => {
      let error
      if (!value) {
        error = "Please enter your username"
      }
      return error
    }
    const validatePassword = (value) => {
      let error
      if (!value) {
        error = "Please enter your password"
      } else if (value.length < 6) {
        error = "Password must be 6 characters long."
      }
      return error
    }

    const [show, setShow] = React.useState(false)
    const handleShow = () => setShow(!show)
  
    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box p={8} maxWidth="700px" borderWidth={1} borderRadius={8} boxShadow="lg">
            <Box textAlign="center">
                <Heading>Log In</Heading>
            </Box>
            <Box my={4} textAlign="left">
                <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                    }, 1000)
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
                                    <Input {...field} id="password" type={show ? "text" : "password"} variant="flushed" placeholder="Password"/>
                                    <InputRightElement>
                                        <Button h="1.75rem" size="md" onClick={handleShow}>
                                        {show ? <ViewOffIcon /> : <ViewIcon />}
                                        </Button>
                                    </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
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
                                Log In
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

export default LoginFormik