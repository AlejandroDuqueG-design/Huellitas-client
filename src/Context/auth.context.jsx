import axios from "axios";
import { createContext, useEffect, useState } from "react";
import service from "../services/config.services";

// Context component (Component that send the states contexts and functions)
const AuthContext = createContext()

// Wrapper component (component that holds the states and functions to be shared)
function AuthWrapper (props) {

    // Context where states and functions will be
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedUserId, setLoggedUserId] = useState(null);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    useEffect (() => {

        // At the start of the app, validate the user token
        authenticateUser()

    }, [])

    const authenticateUser = async () => {
        //This is a function that sends the token to the backend to verify that is valid and receive info about that token owner
        try {
            const response = await service.get("/auth/verify")
           
           // If we get to this point, it means that the backedn validated the token
           console.log(response)
           setIsLoggedIn(true)
           setLoggedUserId(response.data._id)
           setIsAuthenticating (false)
        
        } catch (error) {
            //If we go into the catch it means that the token was not validated by the backend
           console.log(error) 
           setIsLoggedIn(false)
           setLoggedUserId(null)
           setIsAuthenticating (false)
        }
    }


    const passedContext = {
        isLoggedIn,
        loggedUserId,
        authenticateUser
    }

    if (isAuthenticating) {
        <h3>Authenticating User...</h3>
    }

    return (
        <AuthContext.Provider value={passedContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthWrapper
}