import React from "react";

export default function Todo({ text, todo, todos, setTodos }) {
    function deleteHandler() {
        setTodos(todos.filter(function (el) {
            return el.id !== todo.id
        }))
    }
    function completeHandler() {
        setTodos(todos.map(function (item) {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        }))
    }

    function editTodoHandler(e) {
        console.log(e)

        setTodos(function (oldValue) {
            setTodos(todos.map(function (item) {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        text: e.target.value
                    }
                }
                return item
            }))
        })
        // 
    }

    return (
        <div className='todo'>
            <li>
                <input type="text" value={text} className={`todo-item ${todo.completed ? 'completed' : ''}`} onChange={editTodoHandler} />
                {text}
            </li>
            <button
                onClick={completeHandler}
                className="complete-btn"><i className="fas fa-check"></i>
            </button>

            <button
                onClick={deleteHandler}
                className="trash-btn"><i className="fas fa-trash"></i>
            </button>
        </div>
    )
}