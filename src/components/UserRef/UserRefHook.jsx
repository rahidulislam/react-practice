import React, { useRef } from 'react'

const UserRefHook = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(usernameRef.current.value, passwordRef.current.value)
    }
  return (
    <div><form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="name">UserName</label>
        <input
            type="text"
            id="name"
            placeholder="username"
            ref={usernameRef}
        />
    </div>
    <div>
        <label htmlFor="name">Password</label>
        <input
            type="password"
            id="password"
            placeholder="Password"
            ref={passwordRef}
        />
    </div>
    <button type="submit">Submit</button>
</form></div>
  )
}

export default UserRefHook