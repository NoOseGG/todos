import React from "react";
import { Input } from "./Input/Input";

const Todos: React.FC = () => {
  return (
    <div className="w-full h-full bg-zinc-950 flex items-start justify-center relative">
      <Input />
    </div>
  );
};

export { Todos };
