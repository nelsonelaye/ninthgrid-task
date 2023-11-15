import React, { useState } from "react";
import Tab from "./tab";
import { Tabs as MantineTabs } from "@mantine/core";
import TabControl from "./tabControl";
import { Button, Input, Radio } from "..";
import mailIcon from "../../assets/svgs/mail.svg";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [verifyTab, setVerifyTab] = useState("1");
  const [posOptions, setPosOptions] = useState("yes");

  const tabList = [
    {
      id: 1,
      value: "Verify Account",
    },
    {
      id: 2,
      value: "Social Handles",
    },
    {
      id: 3,
      value: "Business Category",
    },
  ];

  const methodList = [
    {
      id: 1,
      value: "BVN",
    },
    {
      id: 2,
      value: "Personal Account Number",
    },
  ];

  const banks = [
    { id: 1, value: "UBA" },
    { id: 2, value: "Zenith" },
    { id: 3, value: "Stanbic IBTC" },
  ];

  const businessTypes = [
    { id: 1, value: "Drug" },
    { id: 2, value: "Agriculture" },
    { id: 3, value: "IT outsourcing" },
  ];

  const categories = [
    { id: 1, value: "Category 1" },
    { id: 2, value: "Category 2" },
    { id: 3, value: "Cat3gory 3" },
  ];

  return (
    <div className="w-full">
      <Button text="Logout" color="bg-red-100" />
      <MantineTabs
        value={activeTab}
        color="transparent"
        className="mt-10"
        onChange={setActiveTab}
      >
        <MantineTabs.List
          defaultChecked="1"
          className="!hidden w-full pb-5 mb-10 border-grey-border md:!flex !flex-nowrap overflow-auto"
        >
          {tabList?.map((item) => (
            <MantineTabs.Tab
              key={item.id}
              value={`${item.id}`}
              className="!p-0 mr-[40px] hover:!bg-transparent hover:!border-transparent"
            >
              <TabControl
                count={item.id}
                active={parseInt(activeTab) === item.id && true}
                complete={parseInt(activeTab) > item.id && true}
                text={item.value}
              />
            </MantineTabs.Tab>
          ))}
        </MantineTabs.List>

        <MantineTabs.Panel value="1">
          <Tab id={1} title="Verify Account">
            <MantineTabs
              value={verifyTab}
              onChange={setVerifyTab}
              color="transparent"
            >
              <span className="label">Select a verification method</span>
              <MantineTabs.List
                defaultChecked="bvn"
                className="before:!border-transparent before:!border-0"
              >
                {methodList?.map((e) => (
                  <MantineTabs.Tab
                    key={e.id}
                    value={`${e.id}`}
                    className="!p-0 mr-[40px] hover:!bg-transparent hover:!border-transparent"
                  >
                    <Radio
                      text={e.value}
                      active={parseInt(verifyTab) === e.id ? true : false}
                    />
                  </MantineTabs.Tab>
                ))}
              </MantineTabs.List>

              <MantineTabs.Panel value="1">
                <div className="my-7">
                  <Input label="Bank Verification Number (11-digits)" />
                </div>
              </MantineTabs.Panel>
              <MantineTabs.Panel value="2">
                <div className="w-full my-7 grid grid-cols-2 gap-[40px]">
                  <Input label="Account Number" />
                  <Input label="Select Bank" variant="select" options={banks} />
                </div>
              </MantineTabs.Panel>
            </MantineTabs>
            <div className="divider" />

            <Button
              text="Continue"
              onclick={() => {
                setActiveTab("2");
              }}
            />
          </Tab>
        </MantineTabs.Panel>

        <MantineTabs.Panel value="2">
          <Tab
            id={2}
            title="Social Handles"
            subTitle="Enter your business social media handles"
          >
            <div className="my-7 grid grid-rows-2 gap-[26px]">
              <div className="grid grid-cols-2 gap-[40px]">
                <Input
                  label="Choose your Abeg Tag (required)"
                  prefixIcon={mailIcon}
                />
              </div>

              <div className="grid grid-cols-2 gap-[40px]">
                <Input label="Instagram" prefixIcon={mailIcon} />
                <Input label="Twitter" prefixIcon={mailIcon} />
              </div>
            </div>

            <div className="divider" />

            <Button
              text="Complete Social Handles"
              onclick={() => {
                setActiveTab("3");
              }}
            />
          </Tab>
        </MantineTabs.Panel>

        <MantineTabs.Panel value="3">
          <Tab id={3} title=" Business Category">
            <div className="my-7 grid grid-cols-2 gap-[40px]">
              <Input
                label="Type of your business"
                variant="select"
                options={businessTypes}
              />
              <Input
                label="Business Category"
                variant="select"
                options={categories}
              />
            </div>

            <div>
              <span className="label">
                Do you use POS machines for your business?
              </span>
              <div className="flex items-center gap-5">
                <Radio
                  text="Yes"
                  active={posOptions === "yes" ? true : false}
                  onclick={() => {
                    setPosOptions("yes");
                  }}
                />
                <Radio
                  text="No"
                  active={posOptions === "no" ? true : false}
                  onclick={() => {
                    setPosOptions("no");
                  }}
                />
              </div>
            </div>
            <div className="divider" />

            <Button text="Complete" />
          </Tab>
        </MantineTabs.Panel>
      </MantineTabs>
    </div>
  );
};

export default Tabs;
