import React, { useState } from 'react'
import './ToDoList-style.css'

import ToDoCard from '../ToDoCard/ToDoCard'

function ToDoList({todos, deleteToDo}) {
    
    return (
        <div className = 'todo-list-container'>
            {
                todos.map(todo => (
                    <ToDoCard key = {todo} task = {todo} deleteToDo = {deleteToDo}/>
                ))
            }
                    
        </div>
    )
}

export default ToDoList
