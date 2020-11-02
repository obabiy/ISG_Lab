import React from 'react'

import { inject, observer } from "mobx-react";
import { useHistory } from 'react-router-dom'


function AdminPanelPage(props) {

    const history = useHistory();

    const signOut = () => {
        props.authStore.signOut()
        history.push('/')
    }

    return (
        <div className = 'container'>
            <h1>Admin Page</h1>
            <button onClick = {() => history.push('/')}>Back home page</button>
            <button onClick = {() => signOut()}>Sign out</button>
        </div>
    )
}

export default inject("authStore")(observer(AdminPanelPage));
