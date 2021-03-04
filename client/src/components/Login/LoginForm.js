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
  Stack,
  Spacer,
  Center,
} from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useHistory } from "react-router-dom"
import { useMutation } from "@apollo/client"
import { LOGIN_MUTATION } from "../../queries/users"

const LoginForm = ({ setUser, setAlert }) => {
  const [show, setShow] = React.useState(false)
  const handleShow = () => setShow(!show)
  const history = useHistory()
  const [login] = useMutation(LOGIN_MUTATION)

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box minWidth="300px" p={8} maxWidth="700px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Log In</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values, actions) => {
              login({
                variables: {
                  username: values.username,
                  password: values.password,
                },
              }).then(({ data }) => {
                console.log(data)
                if (data.login.token) {
                  setUser(data.login.token)
                  history.push("/home")
                } else {
                  actions.resetForm({ values: { password: "" } })
                  setAlert("Invalid login credentials. Please try again.")
                }
              })
            }}
          >
            {props => (
              <Form>
                <Stack spacing={4}>
                  <Field name="username">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.username && form.touched.username}>
                        <Input {...field} id="username" variant="flushed" placeholder="Username" />
                        <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.password && form.touched.password}>
                        <InputGroup>
                          <Input
                            {...field}
                            id="password"
                            type={show ? "text" : "password"}
                            variant="flushed"
                            placeholder="Password"
                          />
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
                  <Spacer />
                  <Button
                    mt={4}
                    width="full"
                    variant="outline"
                    colorScheme="purple"
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Log In
                  </Button>
                  <Spacer />
                  <Center>
                    <Button variant="link" onClick={() => history.push("/signup")}>
                      Need an account?
                    </Button>
                  </Center>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Flex>
  )
}

export default LoginForm
