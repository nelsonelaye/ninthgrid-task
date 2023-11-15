import React, { useRef } from "react";
import dropdown from "../../assets/svgs/drop_down.svg";

const CustomInput = ({ label, prefixIcon, variant, width, options }) => {
  const selectRef = useRef(null);

  const handleImageClick = () => {
    if (selectRef.current) {
      selectRef.current.click(); // Programmatically trigger the click event on the select element
    }
  };
  return (
    <div>
      <label className="label">{label}</label>
      <div
        className={`flex items-center rounded-xl p-4  border-[1px] border-grey-border border-solid ${
          width ? `w-[${width}]` : "w-full"
        } `}
      >
        {prefixIcon && (
          <img src={prefixIcon} alt="prefix icon" className="mr-2" />
        )}
        {variant === "select" ? (
          <>
            <select
              className="bg-transparent border-0 outline-none h-full w-full"
              id="select-dropdown"
              ref={selectRef}
            >
              <option selected />
              {options?.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>

            <img
              src={dropdown}
              alt="arrow drop down icon"
              className="mr-2 cursor-pointer"
              aria-controls="select-dropdown"
              onClick={handleImageClick}
            />
          </>
        ) : (
          <input className="bg-transparent border-0 outline-none h-full w-full" />
        )}
      </div>
    </div>
  );
};

export default CustomInput;
