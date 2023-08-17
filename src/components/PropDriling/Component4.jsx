import React,{useContext} from 'react'
import { UseContext } from './UseConttext'
const Component4 = () => {
    const {user, text} =useContext(UseContext)
    console.log(user)
  return (
    <div>
        <h3>{text} Prop Drilling</h3>
        <h4>name : {user.name}</h4>
        <h4>email: {user.email}</h4>
        <h4>age: {user.age}</h4>
    </div>
  )
}

export default Component4