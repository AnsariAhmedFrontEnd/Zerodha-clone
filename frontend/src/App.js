import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./dashboard/Home";
import AuthCheck from "./AuthCheck";
import LandingPage from "./LandingPage";
import { AuthProvider, useAuth } from "./store/AuthContext"; // No need to use useAuth directly here
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./LoadingSpinner"; // Spinner to show during loading

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
      <ToastContainer />
    </AuthProvider>
  );
};


const AppContent = () => {
  const { loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    
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
  );
};

export default App;
