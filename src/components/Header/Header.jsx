import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo/logo.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-bg-color nav-section">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
