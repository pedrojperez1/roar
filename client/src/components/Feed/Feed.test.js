/**
 * Feed.test.js
 */
import React from "react"
import { render } from "@testing-library/react"
import Feed from "./Feed"
import { MockedProvider } from "@apollo/client/testing"
import { ADD_FEED_POST } from "../../queries/feeds"
 
 describe("testing FeedItem.js", () => {
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
     const testFeed = [
       {
         id: 1,
         content: "This is a test post.",
         createdAt: "1618276595904",
         type: "user",
         user: {
           username: "test",
           profileImage: "https://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
         }
       },
       {
        id: 2,
        content: "This is a second test post.",
        createdAt: "1618276796904",
        type: "system",
        user: {
          username: "rando",
          profileImage: "https://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
        }
      }
     ];
     render(
       <MockedProvider mocks={mocks} addTypename={false}>
         <Feed
           feed={testFeed}
           myFeed={false}
           refetch={() => console.log("refetching")}
         />
       </MockedProvider>
     )
   })
 })