import React, { useState } from 'react'
import './ToDoCard-style.css'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function ToDoCard({task, deleteToDo}) {

    return (
        <div className = 'todo-card-container'>
            <h2>{task}</h2>
            <DeleteForeverIcon id = 'delete-btn' onClick={() => deleteToDo(task)}/>
        </div>
    )
}

export default ToDoCard
