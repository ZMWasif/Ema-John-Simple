import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <NavLink exact activeclassname="active" to="/shop">
          Shop
        </NavLink>
        <NavLink activeclassname="active" to="/orders">
          Orders
        </NavLink>
        <NavLink activeclassname="active" to="/inventory">
          Inventory
        </NavLink>
        <NavLink activeclassname="active" to="/about">
          About
        </NavLink>
        <NavLink activeclassname="active" to="/login">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
