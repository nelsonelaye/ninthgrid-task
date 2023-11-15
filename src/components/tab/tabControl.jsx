import React from "react";
import tick from "../../assets/svgs/tick.svg";

const TabControl = ({ count, text, active, complete }) => {
  return (
    <div className="flex items-center font-medium">
      <div
        className={`rounded-[3.1px] flex items-center justify-center w-[31px] h-[31px] ${
          active === true
            ? "bg-blue-100 text-white-100"
            : "bg-grey-border text-grey-txt"
        } mr-3`}
      >
        {complete ? <img src={tick} alt="complete tick" /> : count}
      </div>
      <span className="text-grey-txt text-2lg ">{text}</span>
    </div>
  );
};

export default TabControl;
