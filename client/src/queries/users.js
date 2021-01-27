/**
 * This file contains all GraphQL query strings related to users
 */

import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
mutation Login(
    $email: String!
    $password: String!
) {
    login(
        email: $email
        password: $password
    ) {
        token
    }
}
`;

export const SIGNUP_MUTATION = gql`
mutation addUser(
    $firstName: String!
    $lastName: String
    $password: String!
    $email: String!
) {
    addUser(
        firstName: $firstName
        lastName: $lastName
        password: $password
        email: $email
    ) {
        token
    }
}
`;

export const FETCH_MY_PROFILE_QUERY = gql`
query getMyProfile {
    getMyProfile {
        id
        firstName
        lastName
        email
        profileImage
    }
}
`;