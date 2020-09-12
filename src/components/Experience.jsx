import React from "react";
import DSC from "../images/dsc-icon.svg";
import RMGX from "../images/rmgx-icon.png";
import "../styles/experience.css";
const Experience = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-11  mx-auto">
            <h1 className="text-center">
              Experience
            </h1>
            <div className="dsc mt-5 justify-content-center text-center">
              <h4 className="text-center">
                Developer Student Clubs Lead
                @BIST, Bhopal
              </h4>
              <img
                className="text-center justify-content-center mt-2"
                src={DSC}
              />
              <p className="text-muted d-4 text-center">
                Session 2020-21
              </p>
            </div>
            <hr className="horizontal-line" />

            <div className="rmgx mt-5 justify-content-center text-center">
              <h4 className="text-center">
                Web Development Intern
              </h4>

              <p className="text-muted d-3 text-center ">
                RMgX Technologies LLP, Gurgaon
                (Haryana)
              </p>
              <a
                href="https://www.rmgx.in/"
                target="_blank"
              >
                <img
                  className="text-center justify-content-center mb-2"
                  src={RMGX}
                />
              </a>
              <p className="text-muted d-4 text-center">
                August 2020 - present
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
