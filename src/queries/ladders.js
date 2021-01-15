/**
 * This file contains all GraphQL query strings related to ladders
 */

import { gql } from "@apollo/client";

export const ADD_LADDER_MUTATION = gql`
mutation AddLadder(
    $name: String!
    $level1: String
    $level2: String
    $level3: String
    $level4: String
    $level5: String
    $level6: String
    $level7: String
    $level8: String
) {
    addLadder(
        name: $name
        level1: $level1
        level2: $level2
        level3: $level3
        level4: $level4
        level5: $level5
        level6: $level6
        level7: $level7
        level8: $level8
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
      dueDate
      completed
    }
  }
}
`;