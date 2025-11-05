// Steps To create store in RTK

// Step #1
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice.js"

// Step #2
export const store = configureStore({
    reducer: todoReducer
})

// Note: in redux toolkit we use the terms slies in the place of reducers
