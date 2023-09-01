/** @format */

import {
  FaSpaceShuttle,
  FaUsers,
  FaClock,
  FaCreditCard,
  FaTasks,
  FaEnvelope,
  FaChartLine,
} from "react-icons/fa";
export const links = [
  {
    name: "Workspace",
    path: "/dashboard",
    icon: <FaSpaceShuttle />,
  },
  {
    name: "Clients",
    path: "/clients",
    icon: <FaUsers />,
  },
  {
    name: "Schedule Appointment",
    path: "/schedule",
    icon: <FaClock />,
  },
  {
    name: "Payment",
    path: "/payment",
    icon: <FaCreditCard />,
  },
  {
    name: "Task",
    path: "/task",
    icon: <FaTasks />,
  },
  {
    name: "Message",
    path: "/message",
    icon: <FaEnvelope />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <FaChartLine />,
  },
];
