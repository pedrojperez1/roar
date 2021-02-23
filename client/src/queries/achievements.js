/**
 * This file contains all GraphQL query strings related to achievements
 */

import { gql } from "@apollo/client";

export const GET_USER_ACHIEVEMENTS = gql`
query getUserAchievements ($username: String!){
    getUserAchievements (username: $username){
        id
        name
        description
        type
        level
    }
}
`;