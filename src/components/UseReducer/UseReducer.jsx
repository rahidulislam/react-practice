import React, { useReducer, useState } from "react";
import {reducer} from'./reducer'
const UseReducer = () => {
    const bookData = [
        { id: 1, title: "React" },
        { id: 2, title: "React Hooks" },
        {
            id: 3,
            title: "React Router",
        },
    ];

    const [bookState, dispatch] = useReducer(reducer, {
        books: bookData,
        isModalOpen: false,
        modalText: "",
    });
    const [addBook, setAddBook] = useState("");
    
    const handleChange = (e) => {
        setAddBook(e.target.value);
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: bookState.books.length + 1, title: addBook };
        dispatch({ type: "ADD", payload: newBook });
        setAddBook("");
    };

    const removeBook = (id)=>{
        dispatch({type: "REMOVE", payload:id})
    }
    

    const Modal = () => {
        return <p>{bookState.modalText}</p>;
    };

    return (
        <div>
            <h1>Book List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={addBook} onChange={handleChange} />
                <button>Add Book</button>
            </form>
            {bookState.isModalOpen && <Modal />}
            {bookState.books.map((book) => {
                return (
                    <li key={book.id}>
                        {book.id} - {book.title}
                        <button onClick={()=>removeBook(book.id)}>Remove</button>
                    </li>
                );
            })}
        </div>
    );
};

export default UseReducer;
