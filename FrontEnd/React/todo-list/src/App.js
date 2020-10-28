import React, { useState } from "react";
import "./App.css";

import InputBox from "./components/InputBox/InputBox";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const changeInput = (value) => {
    setInput(value);
  };

  const addTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteToDo = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo !== todoToDelete));
  };

  return (
    <div className="app-container">
      <h1>ToDo Application</h1>
      <div className="content">
        <InputBox input={input} changeInput={changeInput} addToDo={addTodo} />
        <ToDoList todos={todos} deleteToDo={deleteToDo} />
      </div>
    </div>
  );
}

export default App;
