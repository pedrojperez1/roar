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
        $email: String!
    ) {
        addUser(
            username: $username
            password: $password
            email: $email
        ) {
            token
        }
    }
`;