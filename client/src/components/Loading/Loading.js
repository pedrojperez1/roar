import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

const Loading = () => {
    return (
        <div className="Loading">
            <Center>
                <Spinner size="xl"/>
            </Center>
        </div>
    )
};

export default Loading;