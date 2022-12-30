import React from "react";
import Todo from './Todo'

export default function Todos ({todos, setTodos, filteredTodos}){
    return(
        <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(function(todo){
          return < Todo 
          todo={todo}
          todos={todos} 
          setTodos={setTodos}
          text={todo.text} 
          key={todo.id}/>
        }
        )}
      </ul>
    </div>
    )
}