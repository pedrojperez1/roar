/**
 * This file contains all GraphQL query strings related to feeds
 */

import { gql } from "@apollo/client";

export const ADD_FEED_POST = gql`

mutation addFeedPost(
    $content: String!
    $type: String!
){
    addFeedPost(
        content: $content
        type: $type
    ) {
        id
    }
}

`;

export const GET_MY_FEED = gql`

query getMyFeed {
    getMyFeed {
        id
        content
        createdAt
        type
        user {
            username
            profileImage
        }
    }
}

`;