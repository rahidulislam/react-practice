export const reducer = (state, action) => {
    // action.type, action.payload
    if (action.type === "ADD") {
        const allBooks = [...state.books, action.payload];
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: "Book Added Successfully",
        };
    }else if(action.type==="REMOVE"){
        const filteredBooks = [...state.books].filter(book=>book.id !== action.payload)
        return {
            ...state,
            books:filteredBooks,
            isModalOpen: true,
            modalText: "Book Removed Successfully",
        }

    }
};