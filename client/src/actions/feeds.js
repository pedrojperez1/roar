import { ADD_POST_TO_FEED } from "./types";
import {v4 as uuid} from "uuid";

function addToFeed(userId, newPost) {
    const post = {
        ...newPost,
        id: uuid()
    }
    return {
        type: ADD_POST_TO_FEED,
        payload: { userId, post }
    }
}

export { addToFeed };