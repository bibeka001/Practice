import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-danger navbar-expand-lg">
        <Link to="/home" className="navbar-brand">
          Home
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-Link"></Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-Link"></Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-Link"></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
