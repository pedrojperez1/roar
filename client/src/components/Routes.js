import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import SignUp from "./SignUp/SignUp";
import About from "./About/About";
import Learn from "./Learn/Learn";
import Home from "./Home/Home";
import Settings from "./Settings/Settings";
import Mountain from "./Mountain/Mountain";
import MountainList from "./Mountain/MountainList";
import CurrentUserContext from "../helpers/CurrentUserContext";
import NewMountainForm from "./NewMountainForm/NewMountainForm";
import UserProfilePage from "./UserProfile/UserProfilePage";
import Following from "./Following/Following";

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
                <MountainList />
            </Route>
            <Route exact path="/mountains/new">
                { !currentUser ? <Redirect to="/login" /> : <NewMountainForm /> }
            </Route>
            <Route exact path="/mountains/:id">
                <Mountain />
            </Route>
            <Route exact path="/u/:username">
                { !currentUser ? <Redirect to="/login" /> : <UserProfilePage /> }
            </Route>
            <Route exact path="/following">
            { !currentUser ? <Redirect to="/login" /> : <Following /> }
            </Route>
            <Route>404: Not Found</Route>
        </Switch>
    )
};

export default Routes;