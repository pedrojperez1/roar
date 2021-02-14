import React, { useState } from "react";
import { 
    Box,
    Stack,
    Alert,
    AlertIcon,
    CloseButton,
    Spacer
} from "@chakra-ui/react";
import LoginForm from "./LoginForm";

const Login = ({setUser}) => {
    const [alert, setAlert] = useState('')
    return (
        <div className="Login">
            <Stack spacing={4}>
                {alert && 
                    <Alert status="error">
                        <AlertIcon />
                        <Box flex="1" textAlign="center">{alert}</Box>
                        <CloseButton position="absolute" right="8px" top="8px" onClick={() => setAlert('')}/>
                    </Alert> 
                }
                <Spacer />
                <LoginForm setUser={setUser} setAlert={setAlert}/>
            </Stack>
        </div>
    )
};

export default Login;