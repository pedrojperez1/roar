import React, { useState } from "react";
import { 
    Alert, 
    AlertIcon, 
    Box, 
    CloseButton, 
    Spacer, 
    Stack 
} from "@chakra-ui/react";
import SignUpForm from "./SignUpForm";

const SignUp = ({setUser}) => {
    const [alert, setAlert] = useState('')
    return (
        <div className="SignUp">
            <Stack spacing={4}>
                {alert && 
                    <Alert status="error">
                        <AlertIcon />
                        <Box flex="1" textAlign="center">{alert}</Box>
                        <CloseButton position="absolute" right="8px" top="8px" onClick={() => setAlert('')}/>
                    </Alert> 
                }
                <Spacer />
                <SignUpForm setUser={setUser} setAlert={setAlert}/>
            </Stack>
        </div>
    )
};

export default SignUp;