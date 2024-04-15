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
        <div>
          <span className="text-sm font-bold text-lightBlue">
            Created todo's:{" "}
          </span>
          <span className="px-3 py-[2px] bg-gray border-2 border-darkGray rounded-full">
            {todos.length}
          </span>
        </div>
        <div>
          <span className="text-sm font-bold text-lightPurple">Finished: </span>
          <span className="px-3 py-[2px] bg-gray text-bold border-2 border-darkGray rounded-full">
            {Boolean(todos.length) ? (
              <>
                {todos.filter((todo) => todo.isChecking === true).length} of{" "}
                {todos.length}
              </>
            ) : (
              <>{todos.length}</>
            )}
          </span>
        </div>
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
