"use client";

import React, { useState } from "react";
import TodoItem from "./todo-item";

const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const saveTodo = (e: any) => {
    e.preventDefault();

    setItems([...items, newTask]);
    setNewTask("");
  };

  return (
    <div className="w-1/3 mx-auto p-4 flex flex-col">
      <form onSubmit={saveTodo}>
        <input
          onChange={(event) => setNewTask(event.target.value)}
          value={newTask}
          type="text"
          className="w-full h-full bg-white text-gray-700 py-3 px-2 text-lg rounded-lg shadow-md"
        />
      </form>

      <div className="mt-5 bg-white shadow-md rounded-lg text-black p-4">
        {items.map((item) => (
          <TodoItem key={item} title={item} completed={false} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
