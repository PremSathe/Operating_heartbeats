import React from "react";
import { Search, Bell, User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-blue-100 shadow-sm">
      <div className="flex items-center space-x-2 ml-4">
        <div>
          <img src="/images/Group 35.png" alt="" />
        </div>

        {/* <span className="text-xl font-bold">Operating</span>
        <span className="text-xl font-bold text-red-500">Heartbeat</span> */}
      </div>
      <div
        className="flex items-center space-x-4 flex-grow justify-center"
        style={{ marginLeft: "900px" }}
      >
        <div className="relative flex items-center w-1/2 max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 text-gray-400" size={20} />
          <button className="absolute right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <path d="M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4 px-2">
        <button className="relative bg-white py-2 px-2 rounded-md">
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            12
          </span>
        </button>
        <button className=" bg-white py-2 px-2 rounded-md">
          <User size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
