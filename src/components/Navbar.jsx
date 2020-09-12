import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="container-fluid nav_bar">
      <div className="row">
        <div className="col-11  mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <NavLink
              className="navbar-brand"
              to="/"
            >
              <h4> Ajay Singh</h4>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item pr-3">
                  <NavLink
                    exact
                    className="nav-link"
                    to="/"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item pr-3">
                  <NavLink
                    className="nav-link"
                    to="/experience"
                  >
                    Experience
                  </NavLink>
                </li>
                <li className="nav-item pr-3">
                  <NavLink
                    className="nav-link"
                    to="/project"
                  >
                    Project
                  </NavLink>
                </li>
                <li className="nav-item pr-3">
                  <NavLink
                    exact
                    className="nav-link"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item pr-3">
                  <NavLink
                    exact
                    className="nav-link btn_hire_me"
                    to="/contact"
                  >
                    Hire Me
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
