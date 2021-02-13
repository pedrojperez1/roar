/**
 * This file contains all GraphQL query strings related to ladders
 */

import { gql } from "@apollo/client";

export const ADD_LADDER_MUTATION = gql`
mutation AddLadder(
    $name: String!
    $activities: [Activity]!
    $summit: String!
) {
    addLadder(
        name: $name
        activities: $activities
        summit: $summit
    ) {
        id
    }
}
`;

export const LADDER_QUERY = gql`
query getLadder($id: Int!){
  ladders(id: $id) {
    id
    name
    level1
    level2
    level3
    level4
    level5
    level6
    level7
    level8
    assignments {
      id
      task
      level
      dueDate
      completed
    }
  }
}
`;

export const GET_LADDERS_BY_USERID = gql`
query {
    getMyLadders {
        id
        name
    }
}
`;