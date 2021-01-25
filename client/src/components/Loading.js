import React from "react";
import { Spinner } from "reactstrap";

const Loading = () => {
    return (
        <div className="Loading">
            <Spinner color="primary"/>
        </div>
    )
};

export default Loading;