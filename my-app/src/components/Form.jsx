import React from "react"

export default function Form(props) {

    
    function taskTextHandler(event) {
        props.setTaskText(event.target.value)
    }


    function submitHandler(event){
        event.preventDefault();
        console.log("clicked")

        props.setTodos(prevTodos => {
            return [...prevTodos,
                 {text:props.taskText, completed: false, id: prevTodos.length + 1}]
        })

        props.setTaskText("")

    }

    function disableButton() {
        return props.taskText.length === 0? true:false
    }


    return(
        <form className="row g-3" onSubmit={submitHandler}>
            
            <div className="col-6 m-auto">
                <input
                    onChange={taskTextHandler} 
                    type="text" className="form-control" 
                    id="input" 
                    placeholder="NewTask..."
                    value={props.taskText}
                />
            </div>
            <div className="col-3">
                <button type="submit" className="btn save mb-3" disabled={disableButton()}>Add Task</button>
            </div>
        </form>
    )
}