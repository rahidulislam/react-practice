

export const initialState = {
    users:[
        { id: 1, name: "Rahidul" },
        { id: 2, name: "Selina" },
    ]
}
export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                users:[...state.users, action.payload]
            }
        case "REMOVE":
            const filteredUsers = state.users.filter(user=>user.id !== action.payload)
            return{
                ...state,
                users:filteredUsers

            }
        default:
            return state
    }
}