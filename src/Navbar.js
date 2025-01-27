import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/">Ping's Art</NavLink>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <NavLink to="/paintings">Paintings</NavLink>
          </li>
          <li>
            <NavLink to="/chineseart">Chinese Paintings</NavLink>
          </li>
          <li>
            <NavLink to="/photography">Photography</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
