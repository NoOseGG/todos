import React, { ChangeEvent, useState } from "react";
import plus from "../../../assets/plus.svg";

interface Props {
  handleAddTodo: (query: string) => void;
}

const Input: React.FC<Props> = ({ handleAddTodo }) => {
  const [query, setQuery] = useState("");

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClick = () => {
    handleAddTodo(query);
    setQuery("");
  };

  return (
    <div className="w-full flex items-center justify-center absolute -top-6 gap-2">
      <input
        className="w-96 h-14 pl-2 bg-gray border-2 border-darkGray rounded-md text-lightGray placeholder:text-gray-200"
        placeholder={`Enter title's todo`}
        onChange={handleChangeInput}
      />
      <button
        className="w-24 h-14 bg-blueDark border-2 border-darkGray rounded-md hover:bg-blue-400"
        onClick={() => handleClick()}
      >
        <div className="h-full w-full flex items-center justify-center gap-2">
          <span className="font-bold">Add</span>
          <img className="h-4 w-4" src={plus} alt="plus" />
        </div>
      </button>
    </div>
  );
};

export { Input };
