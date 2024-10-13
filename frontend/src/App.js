import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./dashboard/Home";
import AuthCheck from "./AuthCheck";
import LandingPage from "./LandingPage";
import { AuthProvider } from "./store/AuthContext";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route
          path="/dashboard/*"
          element={
            <AuthCheck>
              <Home />
            </AuthCheck>
          }
        />
      </Routes>
      <ToastContainer />
    </AuthProvider>

  );
};

export default App;
