import React from "react";
import Heart from "../images/heart-icon.svg";
import Copy from "../images/copy-icon.svg";
const Footer = () => {
  return (
    <>
      <div className="container-fluid m-0 bg-white border border-1 d-flex justify-content-center align-items-center mt-2">
        <div className="py-1">
          Made with ReactJS and <img src={Heart} /> by Ajay
          Singh <img src={Copy} /> 2020
        </div>
      </div>
    </>
  );
};

export default Footer;
