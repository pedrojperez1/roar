/**
 * FeedPostForm.test.js
 */
import React from "react"
import { render } from "@testing-library/react"
import FeedPostForm from "./FeedPostForm"
import { MockedProvider } from "@apollo/client/testing"
import { ADD_FEED_POST } from "../../queries/feeds"
 
 describe("testing FeedPostForm.js", () => {
  const mocks = [
    {
      request: {
        query: ADD_FEED_POST,
        variables: {
          content: "This is a test post",
          type: "user"
        },
      },
      result: {
        data: {
          id: 99999
        }
      }
    }
  ];
   it("renders without crashing", () => {
     render(
       <MockedProvider mocks={mocks} addTypename={false}>
         <FeedPostForm />
       </MockedProvider>
    )
   })
 })