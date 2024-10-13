import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

const Menu = () => {
  const { logout, user } = useAuth();
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handlDropDownClick = () => {
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  };

  const logoutHandler = () => {
    logout();
    navigate("/login")
  };

  const menuClass = "menu";
  const selectedMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => {
                handleMenuClick(0);
              }}
            >
              <p className={selectedMenu === 0 ? selectedMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="orders"
              onClick={() => {
                handleMenuClick(1);
              }}
            >
              <p className={selectedMenu === 1 ? selectedMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="holdings"
              onClick={() => {
                handleMenuClick(2);
              }}
            >
              <p className={selectedMenu === 2 ? selectedMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="positions"
              onClick={() => {
                handleMenuClick(3);
              }}
            >
              <p className={selectedMenu === 3 ? selectedMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => {
                handleMenuClick(4);
              }}
            >
              <p className={selectedMenu === 4 ? selectedMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div
          className="profile"
          onClick={() => {
            handlDropDownClick();
          }}
        >
          <div className="avatar" onClick={logoutHandler}>
            {user.name.slice(0,2).toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
