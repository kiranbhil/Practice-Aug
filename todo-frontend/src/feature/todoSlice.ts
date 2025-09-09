import { createSlice } from "@reduxjs/toolkit";

type todoType = {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  status: boolean;
};

const initialState: todoType[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
        category: action.payload.category,
        priority: action.payload.priority,
        status: action.payload.status,
      };
      state = state.push(newTodo);
    },
    deleteTodo(state, action) {        
      return state.filter((todo) => action.payload !== todo.id);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
