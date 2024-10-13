import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./store/AuthContext";

const AuthCheck = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthCheck;
