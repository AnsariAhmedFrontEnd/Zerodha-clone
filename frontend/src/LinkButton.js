// src/components/LinkButton.js

import React from "react";
import "./LinkButton.css"; // Import the CSS for styling

const LinkButton = ({ children }) => {
  return <button className="link-button">{children}</button>;
};

export default LinkButton;
