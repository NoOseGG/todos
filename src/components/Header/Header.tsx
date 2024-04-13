import React from "react";
import logo from "../../assets/rocket.svg";

const Header: React.FC = () => {
  return (
    <header className="w-full h-52 bg-black flex items-center justify-center">
      <div className="flex items-center gap-2">
        <img className="w-6 h-9" src={logo} alt="rocket" />
        <span>
          <span className="text-5xl text-blue-300 font-black">to</span>
          <span className="text-5xl text-purple-600 font-black">do</span>
        </span>
      </div>
    </header>
  );
};

export { Header };
