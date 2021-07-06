import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from "./firebase"

function Login() {

    // SignIn Functionality
    const SignIn = () => {
        auth.signInWithPopup(provider).then(res => {

        }).catch((error) => alert(error.message))
    }

    return ( <
        div className = "login" >
        <
        div className = "login-container" >
        <
        img src = "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" / >
        <
        div className = "login-text" >
        <
        h2 > Sign in to Message Me < /h2> < /
        div > <
        Button onClick = { SignIn } > SignIn With Google < /Button> < /
        div > <
        /div>
    )
}

export default Login