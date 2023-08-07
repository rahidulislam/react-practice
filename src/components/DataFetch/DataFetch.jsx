import React, { useEffect, useState } from "react";

const DataFetch = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then((response) => response.json())
            .then((data) => {
                setTodos(data);
                console.log(data);
            });
    }, []);
    return (
        <div>
            {todos &&
                todos.map((todo) => {
                    return <p key={todo.id}>{todo.title}</p>;
                })}
        </div>
    );
};

export default DataFetch;
