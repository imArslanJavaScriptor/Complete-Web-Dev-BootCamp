// Step #1:
import { createSlice, nanoid } from "@reduxjs/toolkit";

// Step #2:
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

// Step #3:
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // ✅ Add Todo
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },

    // ✅ Remove Todo by ID
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },

    // ✅ Update Todo by ID
    updateTodo: (state, action) => {
      const { id, newText } = action.payload; // Expect { id, newText }
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    },

    // ✅ Delete Todo (same as remove, kept only if needed separately)
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

// ✅ Export actions and reducer
export const {addTodo, removeTodo, deleteTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer;
