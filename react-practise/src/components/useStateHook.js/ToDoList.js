import React, { useState } from 'react'

const ToDoList = () => {
    const [task, setTask] = useState([])
    const [todo, setTodo] = useState("")

    const handleAddTask = () => {
        setTask([...task, {
            id: task.length,
            value: todo
        }])
    }

    const handleDelete = (id) => {
        delete task[id]
        console.log(id)
    }
  return (
    <div>
      <input type='text' onChange={(e) => setTodo(e.target.value)}></input>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>{
        task.map((item) => {
            return (
                <li key={item.id}>{item.value}<button onClick={()=>handleDelete(item.id)}>Delete</button></li>
            )
        })
      }</ul>
    </div>
  )
}

export default ToDoList
