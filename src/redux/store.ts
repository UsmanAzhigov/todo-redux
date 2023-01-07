import { configureStore } from '@reduxjs/toolkit';
import { todoReduce } from './slice/todo';

const store = configureStore({
  reducer: { todo: todoReduce },
});

export default store;
