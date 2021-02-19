import React, { useState } from "react"
import { Formik, Form, Field } from "formik"
import {
  FormControl,
  Button,
  Flex,
  Box,
  Heading,
  Stack,
  Spacer,
  Switch,
  FormLabel,
  Text,
  HStack,
  Center,
  Input,
  FormErrorMessage,
  Image,
  useDisclosure,
} from "@chakra-ui/react"
import { useMutation, useQuery } from "@apollo/client"
import { CHANGE_SETTINGS_MUTATION, FETCH_MY_PROFILE_QUERY } from "../queries/users"
import Loading from "./Loading"
import Layout from "./layout"
import EditAvatar from "./EditAvatar"

const Settings = () => {
  const [saved, setSaved] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [changeSettings] = useMutation(CHANGE_SETTINGS_MUTATION)
  const { loading, error, data, refetch } = useQuery(FETCH_MY_PROFILE_QUERY)

  if (loading) return <Loading />
  if (error) return "Something went wrong :("
  const profile = data.getMyProfile
  const validateEmail = value => {
    let error
    if (!value) {
      error = "Please provide an email address."
    }
    return error
  }
  return (
    <Layout>
      <EditAvatar
        isOpen={isOpen}
        onClose={onClose}
        avatar={profile.profileImage}
        refetch={refetch}
      />
      <Flex width="full" justifyContent="center">
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
          <Heading>
            <Stack>
              <Box textAlign="right">
                <Button variant="ghost" colorScheme="purple" size="xs" onClick={onOpen}>
                  Edit Avatar
                </Button>
              </Box>
              <Center>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  alt={profile.username}
                  src={profile.profileImage}
                  mt="0"
                />
              </Center>
              <Center>
                <Text size="lg">{profile.username}</Text>
              </Center>
            </Stack>
          </Heading>
          <Box my={10} textAlign="left">
            <Formik
              initialValues={{
                isPublic: profile.isPublic,
                emailNotif: profile.emailNotifications,
                email: profile.email,
              }}
              onSubmit={(values, actions) => {
                changeSettings({
                  variables: {
                    isPublic: values.isPublic,
                    emailNotifications: values.emailNotif,
                    email: values.email,
                  },
                }).then(() => {
                  actions.setSubmitting(false)
                  setSaved(true)
                  refetch()
                })
              }}
            >
              {props => (
                <Form>
                  <Stack spacing={4}>
                    <Field name="isPublic">
                      {({ field, form }) => (
                        <FormControl display="flex" alignItems="center">
                          <HStack spacing={3}>
                            <Switch
                              {...field}
                              id="isPublic"
                              size="lg"
                              colorScheme="purple"
                              isChecked={form.values.isPublic}
                            />
                            <FormLabel htmlFor="isPublic">Make profile public?</FormLabel>
                          </HStack>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="emailNotif">
                      {({ field, form }) => (
                        <FormControl display="flex" alignItems="center">
                          <HStack spacing={3}>
                            <Switch
                              {...field}
                              id="emailNotif"
                              size="lg"
                              colorScheme="purple"
                              isChecked={form.values.emailNotif}
                            />
                            <FormLabel htmlFor="emailNotif">Receive email notifications?</FormLabel>
                          </HStack>
                        </FormControl>
                      )}
                    </Field>
                    {props.values.emailNotif && (
                      <Field name="email" validate={validateEmail}>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.email && form.touched.email}>
                            <Input
                              {...field}
                              id="email"
                              variant="flushed"
                              placeholder="Email address"
                            />
                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    )}
                    <Spacer />
                    {!saved ? (
                      <Button
                        mt={4}
                        width="full"
                        colorScheme="purple"
                        isLoading={props.isSubmitting}
                        type="submit"
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        mt={4}
                        width="full"
                        colorScheme="purple"
                        variant="outline"
                        isDisabled={true}
                      >
                        Saved!
                      </Button>
                    )}
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

export default Settings
