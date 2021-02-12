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
import NewLadderStep1 from "./NewLadderStep1";
import NewLadderStep0 from "./NewLadderStep0";
import NewLadderStep2 from "./NewLadderStep2";
import NewLadderStep3 from "./NewLadderStep3";
import NewLadderStep4 from "./NewLadderStep4";
// import NewLadderStep5 from "./NewLadderStep5";
import UserProfile from "./UserProfile";

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
            <Route exact path="/profile">
            { !currentUser ? <Redirect to="/login" /> : <Settings /> }
            </Route>
            <Route exact path="/ladders">
                <LadderList />
            </Route>
            <Route exact path="/ladders/:id">
                <Ladder />
            </Route>
            <Route exact path="/newladder">
                { !currentUser ? <Redirect to="/login" /> : <NewLadderStep0 /> }
            </Route>
            <Route exact path="/newladder/1">
                { !currentUser ? <Redirect to="/login" /> : <NewLadderStep1 /> }
            </Route>
            <Route exact path="/newladder/2">
                { !currentUser ? <Redirect to="/login" /> : <NewLadderStep2 /> }
            </Route>
            <Route exact path="/newladder/3">
                { !currentUser ? <Redirect to="/login" /> : <NewLadderStep3 /> }
            </Route>
            <Route exact path="/newladder/4">
                { !currentUser ? <Redirect to="/login" /> : <NewLadderStep4 /> }
            </Route>
            {/* <Route exact path="/newladder/5">
                { !currentUser ? <Redirect to="/login" /> : <NewLadderStep5 /> }
            </Route> */}
            <Route exact path="/u/:username">
                { !currentUser ? <Redirect to="/login" /> : <UserProfile /> }
            </Route>
            <Route>404: Not Found</Route>
        </Switch>
    )
};

export default Routes;