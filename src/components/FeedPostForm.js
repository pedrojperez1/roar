import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { addToFeed } from "../actions/feeds";
import "./FeedPostForm.css";

const FeedPostForm = () => {
    const INITIAL_STATE = '';
    const [content, setContent] = useState(INITIAL_STATE);
    const currentUserId = useSelector(store => store.users.currentUser);

    const history = useHistory();
    const handleChange = (e) => {
        e.preventDefault();
        setContent(e.target.value);
    }
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("You posted this:", content);
        dispatch(addToFeed(currentUserId, { content: content }));
        setContent(INITIAL_STATE);
        e.target.value = '';
        history.push("/home")
    }

    return (
        // <div className="FeedPostForm">
        //     <Container className="mt-5">
        //         <Row className="justify-content-center">
        //             <Col xs={12} md={10} lg={8} xl={6}>
        //                 <Form className="FeedPostForm-form text-center border p-5">
        //                     <h3 className="mb-5">Post to your feed</h3>
        //                     <FormGroup>
        //                         <Input className="form-control"
        //                             type="textarea"
        //                             name="content"
        //                             placeholder="What's up today?"
        //                             onChange={handleChange}
        //                         />
        //                     </FormGroup>
        //                     <Button className="mt-4 mb-5 mx-1" color="primary" onClick={handleSubmit}>Post</Button>
        //                     <Button className="mt-4 mb-5 mx-1" color="secondary" onClick={() => history.push("/")}>Cancel</Button>
        //                 </Form>
        //             </Col>
        //         </Row>
        //     </Container>
        // </div>
        <div className="FeedPostForm">
            <Container className="mb-5 px-0">
                <Row className="justify-content-center">
                    <Col>
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
                                <Button className="mx-1" color="primary" size="sm" onClick={handleSubmit}>Post</Button>
                                <Button className="mx-1" color="secondary" size="sm" onClick={() => setContent(INITIAL_STATE)}>Cancel</Button>
                                </>
                            }
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default FeedPostForm;