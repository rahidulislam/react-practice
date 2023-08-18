import React, { createContext,useState } from "react";

export const UserContext = createContext();

 const UserProvider = ({ children }) => {
    const userData = [
        { id: 1, name: "Rahidul" },
        { id: 2, name: "Selina" },
    ];
    const [users, setUsers] = useState(userData);
    return <UserContext.Provider value={{users, setUsers}}>
        {children}
    </UserContext.Provider>

}
export default UserProvider;