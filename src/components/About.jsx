import React from "react";
import Portrait from "../images/portrait-ajay.svg";
import Linkedin from "../images/linkedin-icon.svg";
import Github from "../images/github-icon.svg";
import Email from "../images/email-icon.svg";
import Arrow from "../images/arrow-icon.svg";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-11  mx-auto">
            <h2 className="text-center font-font-weight-bold">
              Web Developer, Programmer
            </h2>

            <div className="justify-content-center">
              <h6 className="mx-auto text-center">
                hello, i am Ajay Singh a pre final
                year Student Persuing B.Tech I
                love to learn about new things and
                sharing what i learn <br></br>and
                yes i can Code!
              </h6>
            </div>

            <div className="container_portait text-center mt-5">
              <img src={Portrait}></img>
            </div>

            <div className="social_links  mt-4 d-flex justify-content-center">
              <a
                href="https://www.linkedin.com/in/hello-ajay-singh/"
                target="_blank"
              >
                <img
                  className="m-1"
                  src={Linkedin}
                ></img>
              </a>

              <a
                href="https://github.com/Code-Recursion"
                target="_blank"
              >
                <img
                  className="m-1"
                  src={Github}
                ></img>
              </a>

              <a
                href="mailto:helloajaysingh1@gmail.com?subject=Hello, Ajay&body=write here"
                target="_blank"
              >
                <img
                  className="m-1"
                  src={Email}
                ></img>
              </a>
            </div>

            <div className="container_arrow mt-lg-5 d-flex justify-content-center my-2">
              <img src={Arrow}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
