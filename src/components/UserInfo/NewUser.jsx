import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const NewUser = () => {
    const [userName, setUserName] = useState("");
    const { dispatch } = useContext(UserContext);

    const handleChange = (e) => {
        setUserName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id: new Date().getTime().toString(), name: userName };
        // setUsers((prevUsers) => [...prevUsers, newUser]);
        dispatch({ type: "ADD", payload: newUser });
        setUserName("");
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={userName}
                    onChange={handleChange}
                />
                <button type="submit">Add User</button>
            </form>
        </>
    );
};

export default NewUser;
