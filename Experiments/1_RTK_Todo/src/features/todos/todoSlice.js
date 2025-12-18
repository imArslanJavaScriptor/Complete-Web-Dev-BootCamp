import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('todos') || '[]'),
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.items.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
      localStorage.setItem('todos', JSON.stringify(state.items));
    },
    toggleTodo(state, action) {
      const todo = state.items.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(state.items));
      }
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(t => t.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.items));
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
const todosReducer =  todosSlice.reducer
export default todosReducer;