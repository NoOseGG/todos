import React, { useState } from "react";
import { ITodo } from "../../../interfaces/interfaces";
import { TodoItem } from "../TodoItem/TodoItem";

interface Props {
  todos: ITodo[];
  handleDeleteTodo: (id: number) => void;
}

const ListOfTodos: React.FC<Props> = ({ todos, handleDeleteTodo }) => {
  console.log(`list of todos => ${todos}`);

  return (
    <div className="w-2/4 h-auto mt-16 flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} handleDeleteTodo={handleDeleteTodo}/>
      ))}
    </div>
  );
};

export { ListOfTodos };
