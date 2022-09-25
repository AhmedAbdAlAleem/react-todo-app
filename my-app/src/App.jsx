import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import EditTodo from './components/EditTodo';

import Form from './components/Form';
import Nav from './components/Nav';
import TodoList from './components/TodoList';

export default function App() {
  const [taskText, setTaskText] = useState("") 
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)

    

  

  return (
    <div className='main_div p-3'>
      <Nav/>
        <div className="container mt-3 p-3  rounded-3 " style={{"height":"100vh" , }}>
          <Routes>
            <Route path='/edit/:id' element={<EditTodo todos={todos} setTodos={setTodos} taskText={taskText} setTaskText={setTaskText}/>}/>
            <Route path='/' element={
              <>
              <p></p>
              <Form taskText={taskText} setTaskText={setTaskText} todos = {todos} setTodos={setTodos}/>
              <TodoList todos={todos} setTodos={setTodos} setCount={setCount}/>
              {todos.length > 0 &&
              <p className='percentage'>You have completed {Math.floor(count * 100 / todos.length)}% of your tasks </p>}
              </>
            }
            />
          </Routes>
        
        </div>
    </div>
  );
}

