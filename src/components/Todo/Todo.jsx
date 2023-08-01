import React from 'react'

export default function Todo(props) {
    console.log(props)
    const {title, desc} = props
  return (
    <div>
        
        <div className='card'>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
        
    </div>
  )
}
