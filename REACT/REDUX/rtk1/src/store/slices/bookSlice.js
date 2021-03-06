import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    books: []
}

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        // addBook(state, action){
        //     state.books.push(action.payload)
        // },
        addBook: {
            reducer : (state, action) => {
                state.books.push(action.payload)
            },
            prepare: ( value ) => {
                return {
                    payload: {
                        ...value,
                        id: nanoid(),

                    }
                }
            }
        },
        deleteBook: (state,action) => {
            state.books = state.books.filter(book => book.id !== action.payload.id)
        }
    }
})

console.log(bookSlice)

export const { addBook, deleteBook } = bookSlice.actions

export default bookSlice.reducer