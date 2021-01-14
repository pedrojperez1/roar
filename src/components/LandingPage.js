import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="Home">
            <h1>Welcome to Roar!</h1>
            <p className="lead">Roar is an app where you can work on overcoming your fears in a safe and supervised environment.</p>
            <Link to="/login">
                <Button className="mx-1" color="primary">Log In</Button>
            </Link>
            <Link to="/signup">
                <button className="mx-1 btn btn-link" color="primary">Sign Up</button>
            </Link>
        </div>
    )
};

export default LandingPage;