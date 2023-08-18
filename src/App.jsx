import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clock from "./components/Clock/Clock";
import Todo from "./components/Todo/Todo";
import Data from "./Data.json";
import Counter2 from "./components/Counter/Counter2";
import Counter from "./components/Counter/Counter";
import ConditionalCounter from "./components/Counter/ConditionalCounter";
import Form from "./components/Form/Form";
import Home from "./components/Todo/Home";
import DataFetch from "./components/DataFetch/DataFetch";
import UserRefClass from "./components/UserRef/UserRefClass";
import UserRefHook from "./components/UserRef/UserRefHook";
import UseReducer from "./components/UseReducer/UseReducer";
import Component1 from "./components/PropDriling/Component1";
import Users from "./components/UserInfo/Users";
import NewUser from "./components/UserInfo/NewUser";
import UserProvider, { UserContext } from "./context/UserContext";
function App() {
    

    // const parenData=(childData)=>{
    //   console.log(childData)
    // }
    //const todos = Data.map((item, index)=>(<Todo key={index} title={item.title} desc={item.desc}/>))
    return (
        <UserProvider>
            {/* <h1 className='todoHeader'>Todo App</h1> */}
            {/* <Clock locale="bn-BD"/> */}
            {/* {todos} */}

            {/* <ConditionalCounter/>
      
      {/* <Home/> */}
            {/* <Form /> */}
            {/* <DataFetch/> */}
            {/* <UserRefClass/> */}
            {/* <UserRefHook/> */}
            {/* <UseReducer/> */}
            {/* <Component1/> */}
            <NewUser />
            <Users />
        </UserProvider>
    );
}

export default App;
