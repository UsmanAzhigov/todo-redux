import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  task: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 10,
        text: action.payload,
      };
      state.task.push(todo);
    },
    deleteTodo: (state, action) => {
      state.task = state.task.filter((todo) => todo.id !== action.payload);
    },
    deletedAll: (state) => {
      state.task = [];
    },
  },
});
export const todoReduce = todoSlice.reducer;
export const { addTodo, deleteTodo, deletedAll } = todoSlice.actions;
