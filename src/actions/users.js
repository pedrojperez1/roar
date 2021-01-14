import { ADD_USER, LOGIN_USER } from "./types";
import {v4 as uuid} from "uuid";

function addUser(user) {
    const newUser = {
        ...user,
        id: uuid()
    }
    return {
        type: ADD_USER,
        payload: newUser
    }
}

function loginUser(userId) {
    return {
        type: LOGIN_USER,
        payload: userId
    }
}

export { addUser, loginUser };