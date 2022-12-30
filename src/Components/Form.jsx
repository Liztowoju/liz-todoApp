import React, { useState } from "react";
import { nanoid } from 'nanoid'


export default function Form({ inputText, setInputText, todos, setTodos, setStatus }) {


  function inputTextHandler(e) {
    console.log(e.target.value)
    setInputText(e.target.value)
  }

  function submitTodoHandler(e) {
    e.preventDefault()
    if (inputText === ''){
      return false
    }else{
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: nanoid() }
    ])
  }
    setInputText('')
  }
  function statusHandler(e){
 return setStatus(e.target.value)
  }

  return (
    <form>
      <input 
      value={inputText}
      onChange={inputTextHandler} 
      type="text" 
      className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}