import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../feature/todoSlice";

function ToDo() {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  console.log(todos, "--------");
  const handleDelete = (id: string) => {
    console.log(id);
    
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      {todos?.map((todo: any) => (
        <li key={todo.id}>
          {todo.title}{" "}
          <button onClick={() => handleDelete(todo.id)} className="bg-red p-2">
            X
          </button>
        </li>
      ))}
    </div>
  );
}

export default ToDo;
