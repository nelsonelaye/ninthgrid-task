import React from "react";
import unwrap from "../../assets/svgs/unwrap.svg";
import { Tabs } from "../../components";

const Onboarding = () => {
  return (
    <div className="h-screen w-screen md:grid md:grid-cols-[40%_1fr]">
      <div className="hidden h-screen bg-[#F3E8C9] w-full md:flex items-center justify-center">
        <img src={unwrap} alt="onboarding" className="" />
      </div>
      <div className="h-full w-full px-5 pt-28 flex justify-center md:pt-20 md:px-10 lg:px-16 overflow-y-auto ">
        <Tabs />
      </div>
    </div>
  );
};

export default Onboarding;
