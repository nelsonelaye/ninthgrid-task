import React from "react";

const CustomRadio = ({ text, active, onclick }) => {
  return (
    <div
      className={`border-[1px] ${
        active === true ? "border-blue-100" : "border-grey-border"
      } border-solid py-[5px] px-[19px] rounded-[10px] flex justify-center align-center bg-grey-bg w-fit  cursor-pointer`}
      onClick={onclick}
    >
      {text}
    </div>
  );
};

export default CustomRadio;
