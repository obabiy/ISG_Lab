import React, { useState } from 'react'

import { inject, observer } from 'mobx-react'
import { Redirect, useHistory } from 'react-router-dom'

function SignInPage(props) {

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    let history = useHistory();
    
  const isAuthenticated = props.authStore.isAuthenticated;

    const signIn = () => {
        if(login && password){
            props.authStore.signIn(login, password)
            setLogin('')
            setPassword('')
            history.push("/admin")
        }else{
            alert('Fields can`t be empty')
        }
    } 

    return (
        <div className = 'container'>
            <h1>Sign In Page</h1>
            <input placeholder = 'Login' value = {login} onChange = {(e) => setLogin(e.target.value)}/>
            <input placeholder = 'Password' type = 'password' value = {password} onChange = {(e) => setPassword(e.target.value)}/>
            <button onClick={() => signIn()}>Sign In</button>
            <button onClick={() => history.push('/')}>Back home page</button>
            {
                isAuthenticated ? 
                    <Redirect to = '/admin'/>
                 : null
            }
        </div>
    )
}

export default inject("authStore")(observer(SignInPage))
