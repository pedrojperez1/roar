import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Logout from "./Logout";
import SignUp from "./SignUp";
import About from "./About";
import Learn from "./Learn";
import Home from "./Home";
import Settings from "./Settings";
import Ladder from "./Ladder";
import LadderList from "./LadderList";
import CurrentUserContext from "../helpers/CurrentUserContext";
import NewMountainForm from "./new-mountain-form/NewMountainForm";
import UserProfilePage from "./UserProfilePage";

const Routes = () => {
    const {currentUser, setUser} = useContext(CurrentUserContext);
    return (
        <Switch>
            <Route exact path="/">
                { currentUser ? <Redirect to="/home" /> : <LandingPage /> }
            </Route>
            <Route exact path="/login">
                <Login setUser={setUser}/>
            </Route>
            <Route exact path="/logout">
                <Logout />
            </Route>
            <Route exact path="/signup">
                <SignUp setUser={setUser}/>
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/learn">
                <Learn />
            </Route>
            <Route exact path="/home">
            { !currentUser ? <Redirect to="/login" /> : <Home /> }
            </Route>
            <Route exact path="/settings">
            { !currentUser ? <Redirect to="/login" /> : <Settings /> }
            </Route>
            <Route exact path="/mountains">
                <LadderList />
            </Route>
            <Route exact path="/mountains/new">
                { !currentUser ? <Redirect to="/login" /> : <NewMountainForm /> }
            </Route>
            <Route exact path="/mountains/:id">
                <Ladder />
            </Route>
            <Route exact path="/u/:username">
                { !currentUser ? <Redirect to="/login" /> : <UserProfilePage /> }
            </Route>
            <Route>404: Not Found</Route>
        </Switch>
    )
};

export default Routes;