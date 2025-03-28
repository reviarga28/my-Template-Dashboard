import React, { useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`${
        isDarkMode ? "dark" : ""
      } flex min-h-screen bg-gray-50 dark:bg-gray-900`}
    >
      <aside
        className={`
        bg-white
        dark:bg-gray-800 
        shadow-md
        transition-all duration-300
        flex-shrink-0
        ${isSidebarOpen ? "w-64" : "w-20"}
      `}
      >
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          toggleSidebar={toggleSidebar}
        />
        <main className="flex-1 p-4 overflow-auto text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
          {children || (
            <div className="text-gray-700 dark:text-gray-300"></div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Layout;
