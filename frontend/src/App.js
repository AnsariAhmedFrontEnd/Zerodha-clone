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
      <AppContent /> {/* Move the main logic into this child component */}
      <ToastContainer />
    </AuthProvider>
  );
};

// This component will have access to the context
const AppContent = () => {
  const { loading } = useAuth(); // Now useAuth() will work correctly here

  if (loading) {
    return <LoadingSpinner />; // Show loading spinner while authentication is being checked
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
