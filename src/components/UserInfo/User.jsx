import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const User = ({user}) => {
    const {id, name} = user
    const {handleRemoveUser} = useContext(UserContext)

  return (
    <div>
        <h3>{id}</h3>
        <h4>{name}</h4>
        <button onClick={()=>handleRemoveUser(id)}>Remove</button>
    </div>
  )
}

export default User