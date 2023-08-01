import React from 'react'

export default function Todo(props) {
    console.log(props)
  return (
    <div>
        <p>{props.todo}</p>
    </div>
  )
}
