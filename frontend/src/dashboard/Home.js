import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Home;
