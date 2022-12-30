import { useState, useEffect } from 'react'
import './App.css'
//importing Components
import Form from './Components/Form.jsx'
import Todos from './Components/Todos'

function App() {

  // state 
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  // useEffect{
  useEffect(function () {
    filterHandler()
    saveLocalTodos()
  }, [status, todos])



  //function
  function filterHandler() {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(function (todo) {
          return todo.completed
        }))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(function (todo) {
          return !todo.completed
        }))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }
  // save to local storage
  function saveLocalTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  function getLocalTodos() {
    if (localStorage.getItem('todos' === null)) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className='react'>
      <header>
        <h1>Liz' Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <Todos filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div >
  )
}

export default App
