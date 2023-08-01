import React, { useState } from 'react'

export default function (props) {
    const [todo, setTodo] = useState('')
    const handleChange =(event)=>{
        console.log(event.target.value)
        setTodo(event.target.value)
    }
    const handleSubmit=(event)=>{
        console.log(todo)
        event.preventDefault();
        props.onTodo(todo)

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Add Todo</label>
            <input type="text" name='todo' value={todo} onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
