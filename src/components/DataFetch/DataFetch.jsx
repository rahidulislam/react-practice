import React, { useEffect, useState } from "react";
import useFetch from '../CustomHooks/useFetch';

const DataFetch = () => {
    const { data, isLoading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/todos/"
    );
    const loadingMessage = <p>Loading...</p>;
    const errorMessage = <p>{error}</p>;

    const todoElement =
        data &&
        data.map((todo) => {
            return <p key={todo.id}>{todo.title}</p>;
        });

    return (
        <div>
            <h1>Todos</h1>
            {error && errorMessage}
            {isLoading && loadingMessage}
            {todoElement}
        </div>
    );
};

export default DataFetch;
