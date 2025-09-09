import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../feature";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
