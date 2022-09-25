import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function EditTodo(props) {
    const params = useParams()
    const EditTask = props.todos.filter( 
        todo =>  todo.id === parseInt(params.id)
    )[0];
   
    function editTodoHandler(event) {
        props.setTaskText(event.target.value)
    }

    function saveTodoHandler() {
        console.log("save")
        props.setTodos(prevTodos => {
            return prevTodos.map(prevTodo => {
                return prevTodo.id === EditTask.id? {...prevTodo, text:props.taskText}:prevTodo
            })
        })
        props.setTaskText("")
    }

    function cancelHandler() {
        props.setTaskText("")
    }

    return(
        
        <div className="row d-flex g-3 m-2 p-3">
            <div className="col-6 me-auto ">
                <input type="text"
                 value={props.TaskText}
                 placeholder={EditTask.text} 
                 className="form-control"
                 onChange={editTodoHandler}/>
            </div>
            <div className="col-auto">
            <Link to="/"> <button className="btn save mb-3" onClick={saveTodoHandler} >Save</button></Link>
            </div>
            <div className="col-auto">
                <Link to="/"><button className="btn cancel mb-3" onClick={cancelHandler}>Cancel</button></Link>
            </div>
        </div>
    )
}