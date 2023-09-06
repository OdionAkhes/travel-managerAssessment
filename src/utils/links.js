/** @format */

import {
  FaThLarge,
  FaUsers,
  FaRegClock,
  FaRegMoneyBillAlt,
  FaTasks,
  FaRegCommentDots,
  FaRegClipboard,
} from "react-icons/fa";

export const links = [
  {
    name: "Workspace",
    path: "/dashboard",
    icon: <FaThLarge />, 
  },
  {
    name: "Clients",
    path: "/clients",
    icon: <FaUsers />,
  },
  {
    name: "Schedule Appointment",
    path: "/schedule",
    icon: <FaRegClock />, // Clock outline
  },
  {
    name: "Payment",
    path: "/payment",
    icon: <FaRegMoneyBillAlt />, // Money or invoice outline
  },
  {
    name: "Task",
    path: "/task",
    icon: <FaTasks />,
  },
  {
    name: "Message",
    path: "/message",
    icon: <FaRegCommentDots />, // Comment with dots outline
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <FaRegClipboard />, // Clipboard outline
  },
];
