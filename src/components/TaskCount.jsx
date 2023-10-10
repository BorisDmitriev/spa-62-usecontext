import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContainer'

export default function TaskCount() {

  const {getTaskCount} = useContext(TodoContext)

  return (
    <>
      {getTaskCount()}
    </>
  )
}
