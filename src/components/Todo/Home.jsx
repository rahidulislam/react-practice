import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'

const dummyData = ["todo1","todo2"]
export default function Home() {
    const [todos, setTodo]=useState(dummyData)
    const handleNewTodo = (newTodo)=>{
        setTodo([...todos, newTodo])
    }
  return (
    <div>
        <NewTodo onTodo={handleNewTodo}/>
        <Todos todos={todos}/>
        Home
    </div>
  )
}
