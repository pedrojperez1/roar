import { 
  Button, 
  Input, 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalHeader, 
  ModalOverlay,
  FormControl,
  FormErrorMessage,
  ModalFooter
} from "@chakra-ui/react"
import React from "react"
import { Formik, Form, Field } from "formik"
import { useMutation } from "@apollo/client"
import { CHANGE_AVATAR_MUTATION } from "../queries/users"

const EditAvatar = ({isOpen, onClose, avatar, refetch}) => {
  const [changeAvatar] = useMutation(CHANGE_AVATAR_MUTATION)
  return (
    <div className="EditAvatar">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose an avatar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{ avatarUrl: avatar}}
              onSubmit={(values, actions) => {
                changeAvatar({
                  variables: { profileImage: values.avatarUrl}
                }).then(() => {
                  refetch()
                  actions.setSubmitting(false)
                  onClose()
                })
              }}
            >
              {props => (
                <Form>
                  <Field name="avatarUrl">
                    {({field, form}) => (
                      <FormControl isInvalid={form.errors.avatarUrl && form.touched.avatarUrl}>
                        <Input {...field} id="avatarUrl" placeholder="Avatar URL" />
                        <FormErrorMessage>{form.errors.avatarUrl}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <ModalFooter>
                    <Button colorScheme="purple" mr={3} isLoading={props.isSubmitting} type="submit">Save</Button>
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </Form>
              )}

            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default EditAvatar