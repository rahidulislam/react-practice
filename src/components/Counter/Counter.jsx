import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrease = ()=>{
        setCount((previousCount)=>previousCount+1);
        setCount((previousCount)=>previousCount+1);
        setCount((previousCount)=>previousCount+1);
    }
    const handleDecrease = ()=>{
        setCount((previousCount)=>previousCount-1);
    }
    useEffect(()=>{
        console.log('useEffect')
    }, [count])
  return (
    <div>
        <h1>Functional Component</h1>
        <h2>Count: {count} </h2>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease} disabled={true ? count === 0 : false}>Decrease</button>
    </div>
  )
}
