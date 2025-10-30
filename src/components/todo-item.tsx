"use client";

import { TrashIcon } from "lucide-react";
import React, { useState } from "react";

const TodoItem = ({
  title,
  completed,
}: {
  title: string;
  completed: boolean;
}) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  return (
    <div
      onClick={() => setIsCompleted(!isCompleted)}
      className="px-3 py-1 border-b-[1pt] border-gray-500/5 flex items-center gap-2 cursor-pointer justify-between"
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          defaultChecked={isCompleted}
          checked={isCompleted}
        />
        <span className={`${isCompleted && "line-through text-gray-500"}`}>
          {title}
        </span>
      </div>

      <TrashIcon />
    </div>
  );
};

export default TodoItem;
