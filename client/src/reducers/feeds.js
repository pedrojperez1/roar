import { ADD_POST_TO_FEED } from "../actions/types";
const testFeedPost = {
    userId: "123456789",
    post: {
        content: "This is a sample post from sample user!",
        id: "1"
    }
}
const INITIAL_STATE = [testFeedPost]

function feeds(state=INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_POST_TO_FEED:
            return [...state, action.payload]
        
        default:
            return state;
    }
}

export default feeds;