import React from "react";
import { ITodo } from "../../../interfaces/interfaces";
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  todo: ITodo;
  handleDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, handleDeleteTodo }) => {
  console.log(todo);

  return (
    <div className="w-full h-20 p-4 bg-zinc-800 flex items-center border-2 border-black rounded-xl gap-2">
      <span className="w-6 h-6 border-2 border-blue-500 rounded-full"></span>
      <div className="text-base grow">{todo.title}</div>
      <FaRegTrashAlt className="cursor-pointer" onClick={() => handleDeleteTodo(todo.id)}/>
    </div>
  );
};

export { TodoItem };
