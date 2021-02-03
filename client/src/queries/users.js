/**
 * This file contains all GraphQL query strings related to users
 */

import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
mutation Login(
    $username: String!
    $password: String!
) {
    login(
        username: $username
        password: $password
    ) {
        token
    }
}
`;

export const SIGNUP_MUTATION = gql`
mutation addUser(
    $username: String!
    $password: String!
) {
    addUser(
        username: $username
        password: $password
    ) {
        token
    }
}
`;

export const FETCH_MY_PROFILE_QUERY = gql`
query getMyProfile {
    getMyProfile {
        id
        username
        profileImage
        createdAt
        ladders {
            id
            assignments {
                id
                dueDate
                completed
            }
        }
        following {
            username
        }
    }
}
`;

export const FETCH_PROFILE = gql`
query fetchProfile ($username: String!){
  fetchProfile (username: $username) {
    username
    profileImage
    createdAt
    ladders {
        assignments {
            id
        }
    }
    following {
        id
    }
    followers {
        id
    }
  }
}
`;

export const FOLLOW_USER_MUTATION = gql`
mutation followUser($username: String!) {
    followUser (username: $username)
}
`;

export const UNFOLLOW_USER_MUTATION = gql`
mutation unfollowUser($username: String!) {
    unfollowUser (username: $username)
}
`;