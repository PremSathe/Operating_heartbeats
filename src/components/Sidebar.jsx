import React, { useState } from "react";

const Sidebar = () => {
  const [isReportsExpanded, setIsReportsExpanded] = useState(true);

  const reportItems = [
    "Sales",
    "Services",
    "Customer Experience",
    "Manufacturing",
    "Quality",
    "Sourcing",
    "Finance",
    "Governance",
    "NDP",
    "Marketing",
    "Support",
    "MPP Review",
    "Performance Units",
    "Cost Control",
  ];

  return (
    <div
      className="w-55 text-white h-screen flex flex-col"
      style={{ background: "#061e4a" }}
    >
      <div className="p-4 ">
        <div className="flex items-center mb-4">
          <span>
            <img src="/images/Dashboard.svg" alt="Dashboard" />
          </span>
          <span className="text-sm font-medium ml-2">My Dashboard</span>
        </div>
      </div>
      <div
        className="p-4 flex items-center justify-between cursor-pointer"
        onClick={() => setIsReportsExpanded(!isReportsExpanded)}
        style={{ backgroundColor: "#1f3660" }}
      >
        <div className="flex items-center">
          <span>
            <img src="/images/reports.svg" alt="reports" />
          </span>
          <span className="text-sm font-medium ml-2">My Reports</span>
        </div>
        <span className="text-xs">
          {isReportsExpanded ? (
            <img src="/images/arrow-up.svg" alt="up-arrow" />
          ) : (
            <img src="/images/arrow-down.svg" alt="down-arrow" />
          )}
        </span>
      </div>
      {isReportsExpanded && (
        <div className="flex-grow" style={{ backgroundColor: "#1f3660" }}>
          {" "}
          {/* Added background color here */}
          {reportItems.map((item, index) => (
            <div
              key={index}
              className="px-4 py-3.5 text-sm hover:bg-white  hover:text-black cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
      <div className="mt-auto border-t border-grey  bg-blue-1200">
        <div className="px-4 py-4 mt-4 flex items-center hover:bg-white  hover:text-black cursor-pointer">
          <span>
            <img src="/images/Functions.svg" alt="Functions" />
          </span>
          <span className="text-sm ml-2"> Custom View</span>
        </div>
        <div className="px-4 py-2 flex items-center hover:bg-white  hover:text-black cursor-pointer">
          <span className="text-lg mr-2">
            <img src="/images/chat.svg" alt="chat" />
          </span>
          <span className="text-sm">Chat</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
