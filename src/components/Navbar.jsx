import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-10  mx-auto">
          <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <NavLink class="navbar-brand" to="/">
              Ajay Singh
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <NavLink
                    class="nav-link"
                    to="/"
                  >
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    class="nav-link"
                    to="#experience"
                  >
                    Experience
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    class="nav-link"
                    to="/project"
                  >
                    Project
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    class="nav-link"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    class="nav-link btn_hire_me"
                    to="/contact"
                  >
                    Hire Me!
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
