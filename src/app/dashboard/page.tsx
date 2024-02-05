"use client";
import HeaderBand from "@/components/header-band";
import TabView from "@/components/tabview/tabview";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const Tab = ({
  label,
  isActive,
  onClick,
}: {
  label: any;
  isActive: any;
  onClick: any;
}) => {
  const tabClasses = `inline-block p-4 border-b-2 rounded-t-lg cursor-pointer ${
    isActive
      ? "border-blue-500 text-blue-500"
      : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
  }`;

  return (
    <button className={tabClasses} onClick={onClick}>
      {label}
    </button>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tabId: any) => {
    setActiveTab(tabId);
  };
  return (
    <div className="flex flex-col">
      <HeaderBand title={"Dasboard"} />
      {/* Parent Card (Left Side) */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-[80%]  p-4 border rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            {/* Card */}
            <div className="max-w-full w-full p-6 bg-white border rounded-lg shadow-md">
              <div className="flex justify-evenly items-center ">
                <Avatar
                  alt="Remy Sharp"
                  src="https://picsum.photos/id/237/200/300"
                  className="h-[8vw] w-[8vw] border-3 border-green"
                />
                <div className="w-full flex-[0.6]">
                  <h5 className="text-xl font-bold">Sahil Jain</h5>
                  <p className="text-gray-600">New Seller</p>
                  <p className="text-gray-600">+7999543764</p>
                  <p className="text-gray-600">Mumbai</p>
                  <p className="text-gray-600">30 min ago</p>
                </div>
              </div>
            </div>

            {/* Credits Remaining Boxes */}
            <div className="flex ml-4 w-[100%]">
              <div className="w-40 h-40 bg-[#0F0158] m-3 text-white rounded-lg flex items-center justify-center flex-col">
                <p className="text-base font-bold">1000</p>
                <p className="text-sm">Credit</p>
              </div>

              <div className="w-28 h-28 bg-[#0044BB] m-3 text-white rounded-lg flex items-center justify-center place-self-center flex-col">
                <p className="text-base font-bold">500</p>
                <p className="text-sm">Credit</p>
              </div>

              <div className="w-28 h-28 bg-[#0044BB] m-3 text-white rounded-lg flex items-center justify-center place-self-center flex-col">
                <p className="text-base font-bold">250</p>
                <p className="text-sm">Credit</p>
              </div>
              <div className="w-28 h-28 bg-[#0044BB] m-3 text-white rounded-lg flex items-center justify-center place-self-center flex-col">
                <p className="text-base font-bold">500</p>
                <p className="text-sm">Credit</p>
              </div>
              <div className="w-28 h-28 bg-[#0044BB] m-3 text-white rounded-lg flex items-center justify-center place-self-center flex-col">
                <p className="text-base font-bold">500</p>
                <p className="text-sm">Credit</p>
              </div>
              <div className="w-28 h-28 bg-[#0044BB] m-3 text-white rounded-lg flex items-center justify-center place-self-center flex-col">
                <p className="text-base font-bold">500</p>
                <p className="text-sm">Credit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[80%] mb-4 border-b border-gray-200 dark:border-gray-700">
          <Tab
            label="Profile"
            isActive={activeTab === "profile"}
            onClick={() => handleTabClick("profile")}
          />
          <Tab
            label="Dashboard"
            isActive={activeTab === "dashboard"}
            onClick={() => handleTabClick("dashboard")}
          />
          <Tab
            label="Settings"
            isActive={activeTab === "settings"}
            onClick={() => handleTabClick("settings")}
          />
          <Tab
            label="Contacts"
            isActive={activeTab === "contacts"}
            onClick={() => handleTabClick("contacts")}
          />
        </div>
      </div>

      {/* TabView Component (Below the Card) */}
      {activeTab === "profile" && (
        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
          {/* Profile Content */}
        </div>
      )}
      {activeTab === "dashboard" && (
        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
          {/* Dashboard Content */}
        </div>
      )}
      {activeTab === "settings" && (
        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
          {/* Settings Content */}
        </div>
      )}
      {activeTab === "contacts" && (
        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
          {/* Contacts Content */}
        </div>
      )}

      {/* Points Section (Right Side) */}
      {/* You can add your points section here */}
    </div>
  );
};

export default Dashboard;
