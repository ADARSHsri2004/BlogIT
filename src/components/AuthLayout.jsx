import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// This React component, Protected, is a wrapper that restricts access to its child components based on the user's authentication status.

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate()

    //Local state loader is used to manage a loading indicator while the access check is being performed.

    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    //Executes logic whenever the authStatus, navigate, or authentication props change.

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        }

        //this component is for unauthenticated users

        else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    //While loader is true, a "Loading..." message is displayed.
    //When loader is false, the children components are rendered, indicating access is granted.
    
    return loader ? <h1>Loading...</h1> : <>{children}</>

}


