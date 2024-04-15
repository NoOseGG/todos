import React from "react";
import { ITodo } from "../../../interfaces/interfaces";
import { TodoItem } from "../TodoItem/TodoItem";

interface Props {
  todos: ITodo[];
  handleDeleteTodo: (id: number) => void;
  handleToggleCheck: (id: number) => void;
}

const ListOfTodos: React.FC<Props> = ({
  todos,
  handleDeleteTodo,
  handleToggleCheck,
}) => {
  return (
    <div className="w-2/4 h-auto mt-16 flex flex-col gap-2">
      <div className="px-2 flex justify-between items-center">
        <span>Count todo's: {todos.length}</span>
        <span>
          Finished: {todos.filter((todo) => todo.isChecking === true).length} of{" "}
          {todos.length}
        </span>
      </div>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleCheck={handleToggleCheck}
        />
      ))}
    </div>
  );
};

export { ListOfTodos };
