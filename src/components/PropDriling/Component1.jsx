import React, { useState } from 'react'
import Component2 from './Component2'
import { UseContext } from './UseConttext'
const Component1 = () => {
    const [user, setUser] = useState({
        name: "Rahidul Islam",
        email: "rahiseli@gmail.com",
        age: "35",
    })
    const [text, setText] =useState("Welcome")
  return (
    <UseContext.Provider value={{user,text}}>
        <Component2 />
    </UseContext.Provider>
  )
}

export default Component1