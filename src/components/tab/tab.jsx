import React from "react";

const Tab = ({ id, title, subTitle, children }) => {
  return (
    <div>
      <div className="text-grey-txt text-md leading-[16.93px] md:mb-5">
        Step {id}/3
      </div>

      <div className="my-5">
        <h1>{title}</h1>
        {subTitle && (
          <span className="text-grey-txt2 text-2md">
            Enter your business social media handles
          </span>
        )}
      </div>
      {children}
    </div>
  );
};

export default Tab;
