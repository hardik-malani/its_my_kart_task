import React, { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed h-full bg-white top-0 left-0 z-50 transition-transform transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${
        isOpen
          ? "w-80 lg:w-30 medium:w-60"
          : "w-80 lg:w-60 medium:w-80"
      }`}
    >
      <div className="p-4">
        {/* Add your sidebar content here */}
        <p>Sidebar Content</p>
      </div>
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 focus:outline-none"
      >
        Close
      </button>
    </div>
  );
};

export default Sidebar;
