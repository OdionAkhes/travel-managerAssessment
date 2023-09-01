/** @format */

import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ setUser, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
          e.preventDefault(); 
        if (email && password) {
            setUser({ email });
            setLoggedIn(true);
            navigate("/dashboard");
        } else {
            toast.error("Please enter both email and password to login.");
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-500 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm w-full bg-white p-6  shadow-md">
        <div className="flex justify-between items-center mb-8">
          <div className="gap-1 grid">
            <h3 className=" font-bold text-gray-900">Login</h3>
            <p className="text-black text-xs">Login to your account</p>
          </div>
          <div>
   
            <span className="block bg-gray-300 h-12 w-12 rounded-full"></span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-black"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-3 p-2 w-full border  border-gray-400"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-xs  font-semibold text-black"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-3 p-2 w-full border  border-gray-400"
            />
          </div>
          <div className="grid place-items-center  ">
            <button
              className="uppercase w-72 pt-2 pb-4 my-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-[10px]"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
