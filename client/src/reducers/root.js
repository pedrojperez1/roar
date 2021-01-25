/**
 * This is the root reducer. Combines all imported reducers.
 */

import {combineReducers} from "redux";
import users from "./users";
import feeds from "./feeds";
import ladders from "./ladders";

export default combineReducers({
    users,
    feeds,
    ladders
});