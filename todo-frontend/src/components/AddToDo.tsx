import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todoSlice";

export default function AddToDo() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    category: "",
    priority: "",
    status: false,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
    dispatch(addTodo(todo));
    setTodo({
      title: "",
      description: "",
      category: "",
      priority: "",
      status: false,
    });
  };

  return (
    <div className="w-full flex justify-center ">
      <div className="w-10/15 justify-center m-10 border py-10">
        <h1 className="text-2xl text-bold text-center">Add Todo</h1>
        <div className="flex justify-center items-center m-2 ">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-xl p-2">Title</label>
              <input
                type="text"
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                className="border p-2 m-2"
              />
            </div>{" "}
            <div>
              <label className="text-xl p-2">Description</label>
              <input
                type="text"
                value={todo.description}
                onChange={(e) =>
                  setTodo({ ...todo, description: e.target.value })
                }
                className="border p-2 m-2"
              />
            </div>
            <div>
              <label className="text-xl p-2">Category</label>
              <input
                type="text"
                value={todo.category}
                onChange={(e) => setTodo({ ...todo, category: e.target.value })}
                className="border p-2 m-2"
              />
            </div>
            <div>
              <label className="text-xl p-2">Priority</label>
              <input
                type="text"
                value={todo.priority}
                onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
                className="border p-2 m-2"
              />
            </div>
            <div>
              <label className="text-xl p-2">status</label>
              <input
                type="checkbox"
                value={todo.status}
                onChange={(e) => setTodo({ ...todo, status: e.target.checked })}
                className="border p-2 m-2"
              />
            </div>
            <button
              type="submit"
              className="bg-teal-700 p-2 px-4 rounded-2xl text-white"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
