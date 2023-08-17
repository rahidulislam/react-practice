import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const User = ({user}) => {
    const {id, name} = user
    const {users, setUsers} = useContext(UserContext)

    const handleDeleteUser = (id)=>{
      const filteredUser = [...users].filter((user) => user.id !== id);
      return setUsers(filteredUser);
    }

  return (
    <div>
        <h3>{id}</h3>
        <h4>{name}</h4>
        <button onClick={()=>handleDeleteUser(id)}>Remove</button>
    </div>
  )
}

export default User