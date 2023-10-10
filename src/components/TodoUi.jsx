import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContainer'
import TaskCount from './TaskCount'

export default function TodoUi() {

    const { newTask, setNewTask, taskList, addTask, removeTask } = useContext(TodoContext)

    return (
        <div>

            <h1>Task Count: <TaskCount /></h1>

            <input type="text" placeholder='Add your task here!' onChange={(e) => setNewTask(e.target.value)} />
            &nbsp;
            <button onClick={() => addTask(newTask)}>Add</button>

            <ul>
                {
                    taskList.map((task, index) => {
                        return (
                            <li key={index}>{task}&nbsp;<button onClick={(e) => removeTask(task)}>Remove</button></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
