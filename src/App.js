/** @format */

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import ClientProfile from "./pages/ClientProfile";
import Error from "./pages/Error";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <ToastContainer position="top-center" autoClose={2000} />
      <Routes>
        <Route
          path="/login"
          element={<Login setUser={setUser} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/"
          element={
            loggedIn ? <SharedLayout user={user} /> : <Navigate to="/login" />
          }
        >
          <Route path="dashboard" element={<Dashboard user={user} />} />
          <Route path="clients" element={<Clients />} />
          <Route path="client/:clientId" element={<ClientProfile />} />
          {/* ... add other routes that should be a part of SharedLayout here */}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
