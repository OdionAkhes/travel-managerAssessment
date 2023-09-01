/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-6xl text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-4">Oops! Page not found.</p>
      <button
        className="bg-yellow-500 text-white py-2 px-4 rounded"
        onClick={() => navigate("/dashboard")}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default Error;
