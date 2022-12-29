import { useState } from 'react'
import './App.css'
//importing Components
import Form from './Components/Form.jsx'
import Todos from './Components/Todos'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodo, setFilteredTodo] = useState([])

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
      <Todos todos={todos} setTodos={setTodos} />
    </div >
  )
}

export default App
