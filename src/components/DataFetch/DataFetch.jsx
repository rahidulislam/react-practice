import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    const [todos, setTodos] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/).then(response => response.json()).then(data => {
            console.log()
        })
    })
  return (
    <div>DataFetch</div>
  )
}

export default DataFetch