import React, { useState } from "react";
import { Input } from "./Input/Input";
import { ListOfTodos } from "./ListOfTodos/ListOfTodos";
import { ITodo } from "../../interfaces/interfaces";

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      title: "Buy potato",
      isChecking: false,
    },
    {
      id: 2,
      title: "I will come in work tommorow",
      isChecking: true,
    },
    {
      id: 3,
      title: "Playing Counter-Strike 2",
      isChecking: false,
    },
  ]);

  const handleAddTodo = (query: string) => {
    if (query.length < 10) {
      alert("The todo length is too short");
      return;
    }
    const newTodos = [
      ...todos,
      { id: Math.floor(Math.random() * 1000), title: query, isChecking: false },
    ];
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleToggleCheck = (id: number) => {
    console.log(`check: ${id}`);
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isChecking: !todo.isChecking };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="w-full h-full grow bg-zinc-950 flex items-start justify-center relative">
      <Input handleAddTodo={handleAddTodo} />
      <div className="w-4/5 h-full mx-auto flex justify-center">
        <ListOfTodos
          todos={todos.sort((a, b) =>
            b.isChecking ? -1 : a.isChecking ? 1 : 0
          )}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleCheck={handleToggleCheck}
        />
      </div>
    </div>
  );
};

export { Todos };
