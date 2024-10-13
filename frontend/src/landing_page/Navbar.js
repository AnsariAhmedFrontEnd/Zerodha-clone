import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top bg-body-tertiary border-bottom px-5 py-3"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "25%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active me-2"
                aria-current="page"
                to="/signup"
                style={{ color: "#666666"}}
              >
                Signup
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active  me-2"
                to="/about"
                style={{ color: "#666666" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active bold  me-2"
                to="/products"
                style={{ color: "#666666" }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active  me-2"
                to="/pricing"
                style={{ color: "#666666" }}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active  me-2"
                to="/support"
                style={{ color: "#666666" }}
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
