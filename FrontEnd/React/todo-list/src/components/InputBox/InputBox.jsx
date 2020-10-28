import React, { useState } from "react";
import './InputBox-style.css'

import Button from '@material-ui/core/Button';

function InputBox({input, changeInput, addToDo}) {

  return (
    <div className="inputBox-container">
      <input className = 'input-todo' 
        placeholder = "Write down your task..."
        onChange={(e) => changeInput(e.currentTarget.value)}
        value = {input}
      />
      <Button variant="contained" color="secondary" onClick={() => addToDo()}>
        Add
      </Button>
    </div>
  );
}

export default InputBox;
