import { ADD_USER, LOGIN_USER } from "../actions/types";

const testUser = {
    id: "123456789",
    username: "test",
    password: "password",
    email: "test@user.com"
}
const INITIAL_STATE = {currentUser: '', users: {[testUser.id]: testUser}}

function users(state=INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                currentUser: action.payload.id,
                users: {...state.users, [action.payload.id]: action.payload}
            }
        case LOGIN_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        
        default:
            return state;
    }
}

export default users;