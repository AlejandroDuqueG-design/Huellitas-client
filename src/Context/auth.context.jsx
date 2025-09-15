import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Context component (Component that send the states contexts and functions)
const AuthContext = createContext()

// Wrapper component (component that holds the states and functions to be shared)
function AuthWrapper (props) {

    // Context where states and functions will be
    const [isLogedIn, setisLogedIn] = useState(false);
    const [loggedUserId, setloggedUserId] = useState(null);
    const [isAuthenticating, setisAuthenticating] = useState(true);

    useEffect (() => {

        // At the start of the app, validate the user token
        authenticateUser()

    }, [])

    const authenticateUser = async () => {
        //This is a function that sends the token to the backend to verify that is valid and receive info about that token owner
        const authToken = localStorage.getItem("authToken")

        try {
           const response = await axios.get (`${import.meta.env.VITE_SERVER_URL}/api/auth/verify`, {
            headers: {
                authorization: `Bearer ${authToken}`
            }
           })
           
           // If we get to this point, it means that the backedn validated the token
           console.log(response)
           setisLogedIn(true)
           setloggedUserId(response.data._id)
           setisAuthenticating (false)
        
        } catch (error) {
            //If we go into the catch it means that the token was not validated by the backend
           console.log(error) 
           setisLogedIn(false)
           setloggedUserId(null)
           setisAuthenticating (false)
        }
    }


    const passedContext = {
        isLogedIn,
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