import React, {useState} from 'react'

export const TodoContext = React.createContext()

export default function TodoContainer(props) {

  const [taskList, setTaskList] = useState([])
  const [newTask, setNewTask] = useState('')  

  function addTask(task) {
    setTaskList(
        [
            ...taskList,
            task
        ]
    )

    document.querySelector('input').value = ''
  }

  function removeTask(task) {
    const index = taskList.indexOf(task)
    const newTaskList = [ ...taskList.slice(0,index), ...taskList.slice(index+1) ]   
    setTaskList(newTaskList)
  }

  function getTaskCount(){
    return (
        taskList.length
    )
  }


  return (
    <TodoContext.Provider value={
        {
            newTask,
            setNewTask,
            addTask,
            taskList,
            removeTask,
            getTaskCount,
        }
    }>
        {props.children}
    </TodoContext.Provider>
  )
}
