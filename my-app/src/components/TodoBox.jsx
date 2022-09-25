import React from "react";
import { Link } from "react-router-dom";

export default function TodoBox(props){

    function deleteTodoHandler() {
        props.setTodos((prevTodos) => {
            return prevTodos.filter((prevTodo) => {
                return prevTodo.id  !== props.todo.id
            })
        })
        props.setCount(prevCount => {
            return props.todo.completed? prevCount - 1: prevCount
           })
               
    }

  
    function textToggleHandler(){
        props.setTodos(prevTodos => {
            return prevTodos.map(prevTodo => {
                return prevTodo.id === props.todo.id?{...prevTodo,completed:!prevTodo.completed}:prevTodo
            })
        })  
       props.setCount(prevCount => {
        return props.todo.completed? prevCount - 1: prevCount + 1
       })
           
    } 


    

    const styles = {
        textDecoration: props.todo.completed? "line-through":"none",
        cursor:"pointer",
        color:props.todo.completed? "red":"black"
    }

   
   
    return(
        <div className="row d-flex justify-content-between g-1 brdr m-2 pt-3 ps-2">
            
            <div className="col-5 me-auto">
                <p onClick={textToggleHandler} style={styles} className=" brdrr rounded-2 p-2">{props.todo.text}</p>
            </div>
            <div className="col-1">
            <Link to={`/edit/${props.todo.id}`}><button className="btn save">Edit</button></Link>
            </div>
            <div className="col-1">
            <button className="btn cancel mb-3" onClick={deleteTodoHandler}>Delete</button>
            </div>
        </div>
  
    )
}