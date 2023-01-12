import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
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
        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <NavLink activeclassname="active" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
