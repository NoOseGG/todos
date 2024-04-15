import React from "react";
import { ITodo } from "../../../interfaces/interfaces";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";

interface Props {
  todo: ITodo;
  handleDeleteTodo: (id: number) => void;
  handleToggleCheck: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, handleDeleteTodo, handleToggleCheck }) => {
  console.log(todo);

  return (
    <div className="w-full h-20 p-4 bg-zinc-800 flex items-center border-2 border-black rounded-xl gap-2">
      <span
        className={`w-6 h-6 ${
          todo.isChecking ? "bg-lightPurple" : "border-2 border-lightBlue"
        } rounded-full cursor-pointer flex justify-center items-center`}
        onClick={() => handleToggleCheck(todo.id)}
      >
        {todo.isChecking && <IoIosCheckmark className="w-8 h-8" />}
      </span>
      <div className={`text-base grow ${todo.isChecking && 'line-through text-lightGray'}`}>{todo.title}</div>
      <FaRegTrashAlt
        className="cursor-pointer"
        onClick={() => handleDeleteTodo(todo.id)}
      />
    </div>
  );
};

export { TodoItem };
