import React, { createContext, useState, useReducer } from "react";
import { initialState, reducer } from "../components/reducer/UserReducer";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserProvider;
