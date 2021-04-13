/**
 * FeedItem.test.js
 */
import React from "react"
import { render } from "@testing-library/react"
import FeedItem from "./FeedItem"

describe("testing FeedItem.js", () => {
  it("renders without crashing", () => {
    render(
      <FeedItem 
        type="user"
        content="this is a test content"
        username="test"
        profileImage="https://www.101dogbreeds.com/wp-content/uploads/2014/09/Cavapoo-Pictures.jpg"
        createdAt={12345567}
      />
    )
  })
})