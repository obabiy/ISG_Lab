import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

function SignUpPage(props) {

    const history = useHistory();

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [confirmedPassword, setConfirmedPassword] = useState();

    const signUp = () => {
        if((password && login) && password === confirmedPassword){
            props.authStore.addUser(login, password)
            history.push('/')
        }else alert("Password`s didn`t match")
    }

    return (
        <div className = 'container'>
            <input placeholder = 'Set your login' value = {login} onChange = {(e) => setLogin(e.target.value)}/>
            <input placeholder = 'Set your password' value = {password} onChange = {(e) => setPassword(e.target.value)}/>
            <input placeholder = 'Repeat your password' value = {confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)}/>
            <button onClick ={() => signUp()}>Sign Up</button>
            <button onClick={() => history.push('/')}>Back home page</button>
        </div>
    )
}

export default inject("authStore")(observer(SignUpPage))
