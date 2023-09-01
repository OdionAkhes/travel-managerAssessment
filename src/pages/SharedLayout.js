/** @format */

import { useState } from "react";
import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const SharedLayout = ({ user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="layout-container min-h-screen ">
      <Navbar user={user} toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />
        <main
          className={`h-screen flex-grow p-5 bg-gray-300 transition-margin duration-300 ${
            sidebarOpen ? "ml-60" : "ml-0"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SharedLayout;
