import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Logout from "./Logout";
import SignUp from "./SignUp";
import About from "./About";
import Learn from "./Learn";
import Home from "./Home";
import Feed from "./Feed";
import Profile from "./Profile";
import MessageBoardPostForm from "./MessageBoardPostForm";
import FearLadderForm from "./FearLadderForm";
import Ladder from "./Ladder";
import LadderList from "./LadderList";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/logout">
                <Logout />
            </Route>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/learn">
                <Learn />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/board/new">
                <MessageBoardPostForm />
            </Route>
            <Route exact path="/ladders">
                <LadderList />
            </Route>
            <Route exact path="/ladders/new">
                <FearLadderForm />
            </Route>
            <Route exact path="/ladders/:id">
                <Ladder />
            </Route>
            <Route>404: Not Found</Route>
        </Switch>
    )
};

export default Routes;