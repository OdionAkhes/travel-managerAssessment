/** @format */

import React from "react";
import { links } from "../utils/links";
import {  NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={` p-4 w-60 fixed top-0 left-0 h-full transform transition-transform duration-300 ${
        isOpen ? "translate-x-0 "  : "-translate-x-full"
      }`}
    >
      <div className="mx-auto block m-4 bg-gray-300 h-20 w-20 rounded-full"></div>
      <ul className="space-y-6">
        {links.map((link) => (
          <li key={link.name} className="mb-2 ">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600 b px-3 border-l-4 text-sm border-yellow-600   "
                  : "px-4 hover:text-yellow-300 text-sm"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
