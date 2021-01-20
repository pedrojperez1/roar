import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Logout from "./Logout";
import SignUp from "./SignUp";
import About from "./About";
import Learn from "./Learn";
import Home from "./Home";
import Profile from "./Profile";
import FearLadderForm from "./FearLadderForm";
import Ladder from "./Ladder";
import LadderList from "./LadderList";
import CurrentUserContext from "../helpers/CurrentUserContext";
import NewLadderStep1 from "./NewLadderStep1";
import NewLadderStep0 from "./NewLadderStep0";
import NewLadderStep2 from "./NewLadderStep2";
import NewLadderStep3 from "./NewLadderStep3";
import NewLadderStep4 from "./NewLadderStep4";
import NewLadderStep5 from "./NewLadderStep5";

const Routes = () => {
    const {currentUser, setUser} = useContext(CurrentUserContext);
    return (
        <Switch>
            <Route exact path="/">
                <LandingPage />
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
                <Home />
            </Route>
            <Route exact path="/profile">
                <Profile />
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
            <Route exact path="/newladder">
                <NewLadderStep0 />
            </Route>
            <Route exact path="/newladder/1">
                <NewLadderStep1 />
            </Route>
            <Route exact path="/newladder/2">
                <NewLadderStep2 />
            </Route>
            <Route exact path="/newladder/3">
                <NewLadderStep3 />
            </Route>
            <Route exact path="/newladder/4">
                <NewLadderStep4 />
            </Route>
            <Route exact path="/newladder/5">
                <NewLadderStep5 />
            </Route>
            <Route>404: Not Found</Route>
        </Switch>
    )
};

export default Routes;