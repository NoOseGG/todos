import React from "react";
import plus from "../../../assets/plus.svg";

const Input: React.FC = () => {
  return (
    <div className="flex items-center justify-center absolute -top-6 gap-2">
      <input
        className="w-96 h-14 pl-2 bg-zinc-800 border-0 rounded-md placeholder:text-gray-200"
        placeholder={`Enter title's todo`}
      />
      <button className="w-24 h-14 bg-blue-500 border-0 rounded-md hover:bg-blue-400">
        <div className="h-full w-full flex items-center justify-center gap-2">
          <span className="font-bold">Add</span>
          <img className="h-4 w-4" src={plus} alt="plus" />
        </div>
      </button>
    </div>
  );
};

export { Input };
