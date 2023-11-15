import React, { useState } from "react";
import lock from "../../assets/svgs/lock.svg";
import goldLock from "../../assets/svgs/gold_lock.svg";
import arrow from "../../assets/svgs/arrow_up.svg";
import stroke from "../../assets/svgs/stroke.svg";

const Disclaimer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const access = [
    { id: 1, value: "Full Name" },
    { id: 2, value: "Phone Number" },
    { id: 3, value: "Date of Birth" },
  ];

  const handleDisplay = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`p-5 mb-3 rounded-[5px] ${isOpen && "bg-grey-disclaimer"}`}>
      <div className="flex items-center">
        <img src={lock} alt="lock" className="mr-3" />
        <span className="font-medium text-3sm">Why we need your BVN</span>

        <div
          className="flex  items-center ml-auto cursor-pointer"
          onClick={handleDisplay}
        >
          <span className="text-sm text-[#5257F5] mr-1 ">
            {isOpen ? "Hide" : "Show"}
          </span>
          <img src={arrow} alt="arrow up" />
        </div>
      </div>

      {isOpen && (
        <div className="text-black-70 text-2sm ml-[30px] ">
          <span className="opacity-70">We only need access to your:</span>
          <ul className="mb-2 opacity-70">
            {access?.map((e) => (
              <li className="py-[3px] flex items-center">
                <img src={stroke} alt="" className="mr-2" />
                {e.value}
              </li>
            ))}
          </ul>

          <div className="divider !mt-[10px]" />

          <div className="flex items-center leading-[15px] ">
            <img src={goldLock} alt="lock" className="mr-2" />
            Your BVN does not give us access to your bank accounts or
            transactions
          </div>
        </div>
      )}
    </div>
  );
};

export default Disclaimer;
