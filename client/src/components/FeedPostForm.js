import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { ADD_FEED_POST } from "../queries/feeds";
import "./FeedPostForm.css";

const FeedPostForm = ({refetch}) => {
    const INITIAL_STATE = '';
    const [content, setContent] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        e.preventDefault();
        setContent(e.target.value);
    }

    const [addPost] = useMutation(ADD_FEED_POST, {
        variables: {
            content: content,
            type: "user"
        },
        onCompleted: () => {
            setContent(INITIAL_STATE);
            refetch();
        }
    });

    return (
        <div className="FeedPostForm w-100">
            <Form className="FeedPostForm-form text-right border p-2">
                <FormGroup className="mb-2">
                    <Input className="form-control"
                        type="textarea"
                        name="content"
                        placeholder="What's up today?"
                        onChange={handleChange}
                        value={content}
                    />
                </FormGroup>
                {content.length > 1 &&
                    <>
                    <Button className="mx-1" color="primary" size="sm" onClick={addPost}>Post</Button>
                    <Button className="mx-1" color="secondary" size="sm" onClick={() => setContent(INITIAL_STATE)}>Cancel</Button>
                    </>
                }
            </Form>
        </div>
    )
};

export default FeedPostForm;