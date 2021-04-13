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
        isPublic
        emailNotifications
        email
        isNew
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
            profileImage
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
    feed {
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

export const CHANGE_SETTINGS_MUTATION = gql`
mutation changeSettings(
    $isPublic: Boolean!
    $emailNotifications: Boolean!
    $email: String
) {
    changeSettings(
        isPublic: $isPublic
        emailNotifications: $emailNotifications
        email: $email
    ) {
        id
        username
        profileImage
        createdAt
        isPublic
        emailNotifications
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
            profileImage
        }
    }
}
`;

export const CHANGE_AVATAR_MUTATION = gql`
mutation changeAvatar($profileImage: String!) {
    changeAvatar(profileImage: $profileImage) {
        id
        username
        profileImage
    }
}
`;

export const RECOMMENDED_USERS_QUERY = gql`
query recommendedUsers {
    recommendedUsers {
        username
        profileImage
    }
}
`;

export const WHO_AM_I_FOLLOWING_QUERY = gql`
query getMyFollowing($query: String) {
    getMyFollowing(query: $query) {
        username
        profileImage
    }
}
`;

export const SET_ISNEW_FALSE_MUTATION = gql`
mutation setIsNewFalse {
    setIsNewFalse
}
`;