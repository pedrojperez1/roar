/**
 * This file contains all GraphQL query strings related to assignments
 */

import { gql } from "@apollo/client";

export const COMPLETE_ASSIGNMENT_MUTATION = gql`

mutation completeAssignment($id: Int!){
    completeAssignment(id: $id)
}

`;