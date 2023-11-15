import React from "react";

const Button = ({ text, onclick, color }) => {
  return (
    <button
      className={`rounded-lg px-[30px] flex h-[50px] items-center justify-center text-white-100 leading-[22px] text-2md font-bold cursor-pointer ml-auto ${
        color ? color : "bg-blue-100"
      } `}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
