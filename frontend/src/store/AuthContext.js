// src/AuthContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// Create the context
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state for authentication check

  // Function to check authentication status
  const checkAuthStatus = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/",
        {},
        { withCredentials: true }
      );
      const data = response.data;

      if (data.status) {
        setIsAuthenticated(true);
        setUser(data.user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false); // Update loading state
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Function to log in the user
  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        credentials,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        console.log(response.data.user);
        console.log(response.data.message);
        toast.success(response.data.message);
        setIsAuthenticated(true);
        setUser(response.data.user);
        await checkAuthStatus(); // Call checkAuthStatus explicitly to sync state
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to log out the user
  const logout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/logout",
        {},
        { withCredentials: true }
      );
      toast.success(response.data.message);
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, loading }}
    >
      {!loading && children}
      {/* Render children only when loading is complete */}
    </AuthContext.Provider>
  );
};
