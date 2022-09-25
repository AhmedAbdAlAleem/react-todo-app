import React from "react"
import TodoBox from "./TodoBox"

export default function TodoList(props) {
    const todoElements = props.todos.map((todo) => (
            <TodoBox todo={todo} key={todo.id} setTodos={props.setTodos} setCount={props.setCount}/>  
    ))
    return(
        <div>
            {todoElements }
        </div>

    )
}