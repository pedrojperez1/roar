import { LOGIN_USER } from "./types";
import { request, gql } from "graphql-request";

const BASE_URL = "http://localhost:4000/graphql";

function addUser({username, password, email}) {
    return async function(dispatch) {
        const query = gql`
            mutation addUser($username: String!, $password: String!, $email: String!) {
                addUser(username: $username, password: $password, email: $email) {
                    token
                }
            }
        `;
        let res = await request(BASE_URL, query, {username, password, email});
        console.log(res.addUser.token);
        dispatch(addedUser(res.addUser.token));
    }
}

function addedUser(token) {
    return {
        type: LOGIN_USER,
        payload: token
    }
}

function loginUser({username, password}) {
    console.log("inside loginUser");
    return async function(dispatch) {
        const query = gql`
            mutation Login($username: String!, $password: String!) {
                login(username: $username, password: $password) {
                    token
                }
            }
        `;
        let res = await request(BASE_URL, query, {username, password});
        console.log(res.login.token);
        dispatch(loggedInUser(res.login.token));
    }
}

function loggedInUser(token) {
    console.log("inside loggedInUser");
    return {
        type: LOGIN_USER,
        payload: token
    }
}

export { addUser, loginUser };