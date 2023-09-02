/** @format */

import React from "react";
import { Icon } from "@iconify/react";
import bellOutline from "@iconify/icons-ic/baseline-notifications-none";

const Navbar = ({ user, toggleSidebar }) => {
  const defaultUser = {
    name: "Kelin",
    profilePic: "https://randomuser.me/api/portraits/women/23.jpg",
  };

  return (
    <nav className="flex items-center justify-end p-2 pr-8 w-full">
   
      <button onClick={toggleSidebar} className="mr-4 cursor-pointer">
        ☰{" "}
    
      </button>
      <div className="flex items-center space-x-4">
  
        <div className="relative cursor-pointer">
          <Icon icon={bellOutline} className="h-6 w-6 text-black" />
          <span className="absolute top-0 right-0 block h-3 w-3 rounded-full text-white bg-red-600 text-[8px]  text-center">
            2
          </span>
        </div>

        <span className="text-black text-xs font-semibold">
          {defaultUser.name}
        </span>

        <img
          src={defaultUser.profilePic}
          alt="Profile"
          width="30"
          className="rounded-full"
          height="30"
        />
      </div>
    </nav>
  );
};

export default Navbar;
