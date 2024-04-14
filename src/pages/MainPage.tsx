import React from "react";

import { Header } from "../components/Header/Header";
import { Todos } from "../components/Todos/Todos";

const MainPage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <Todos />
    </div>
  );
};

export { MainPage };
