import React, { useEffect, useState } from "react";

const loadingMessage = <p>Loading...</p>;
const DataFetch = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then((response) => {
                if (!response.ok) {
                    throw Error("Something went wrong");
                }
                return response.json();
            })
            .then((data) => {
                setTodos(data);
                setIsLoading(false);
                setError(null);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error.message);
            });
    }, []);

    const todoElement =
        todos &&
        todos.map((todo) => {
            return <p key={todo.id}>{todo.title}</p>;
        });
    return (
        <div>
            <h1>Todos</h1>
            {error && <p>{error}</p>}
            {isLoading && loadingMessage}
            {todoElement}
        </div>
    );
};

export default DataFetch;
