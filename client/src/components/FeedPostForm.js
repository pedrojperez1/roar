import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FEED_POST } from "../queries/feeds";
import { 
    Button, 
    Flex, 
    FormControl, 
    FormErrorMessage, 
    Modal, 
    ModalBody, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
    Spacer, 
    Text, 
    Textarea 
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

const FeedPostForm = ({isOpen, onClose, refetch}) => {
    const [charLength, setCharLength] = useState(0)
    const handleChange = e => {
        e.preventDefault()
        setCharLength(e.target.value.length)
    }
    const handleClose = () => {
        setCharLength(0)
        onClose()
    }
    const validateContent = value => {
        let error
        if (value.length < 1) {
            error = "Cannot submit empty post."
        } else if (value.length > 200) {
            error = "Too many characters. Max 200 characters."
        }
        return error
    }

    const [addPost] = useMutation(ADD_FEED_POST)

    return (
        <div className="FeedPostForm">
            <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Post an update</ModalHeader>
                    <ModalBody>
                        <Formik
                            initialValues={{ content: ''}}
                            onSubmit={(values, actions) => {
                                addPost({
                                    variables: { content: values.content, type: "user"}
                                }).then(() => {
                                    refetch()
                                    actions.setSubmitting(false)
                                    setCharLength(0)
                                    onClose()
                                })
                            }}
                        >
                        {props => (
                            <Form onChange={handleChange}>
                            <Field name="content" validate={validateContent}>
                                {({field, form}) => (
                                <FormControl>
                                    <Textarea {...field} id="content" placeholder="What's up today?"/>
                                    <FormErrorMessage>{form.errors.content}</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
                            <Flex>
                                <Spacer />
                                <Text fontSize="sm" fontWeight="light">{charLength} / 200 characters</Text>
                            </Flex>
                            <ModalFooter>
                                <Button colorScheme="purple" mr={3} isLoading={props.isSubmitting} type="submit">Post</Button>
                                <Button variant="ghost" onClick={handleClose}>Cancel</Button>
                            </ModalFooter>
                            </Form>
                        )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
};

export default FeedPostForm;