import React from "react";
import Portrait from "../images/portrait-ajay.svg";
import Linkedin from "../images/linkedin-icon.svg";
import Github from "../images/github-icon.svg";
import Email from "../images/email-icon.svg";
import Arrow from "../images/arrow-icon.svg";
import "../styles/about.css";
import "../styles/animation.css";

import html from "../images/html-icon.svg";
import css from "../images/css-icon.svg";
import js from "../images/js-icon.svg";
import react from "../images/react-icon.svg";
import git from "../images/git-icon.svg";
import c from "../images/c-icon.svg";
import cpp from "../images/cpp-icon.svg";
import github from "../images/github.svg";

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
                sharing what i learn and yes i can
                Code!
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
                href="mailto:helloajaysingh1@gmail.com?subject=Hello&body=Hello Ajay!"
                target="_blank"
              >
                <img
                  className="m-1"
                  src={Email}
                ></img>
              </a>
            </div>

            <div className="container_arrow mb-5 mt-md-5 mt-xs-4 d-flex justify-content-center  floating arrow-down">
              <a href="#about-2">
                <img
                  className="mt-md-5"
                  src={Arrow}
                ></img>
              </a>
            </div>
          </div>
          <div className="col-11  mt-5 mx-auto">
            <h2 className="mt-5 text-center font-font-weight-bold mb-5">
              Know Me More
            </h2>

            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12-xs">
                  <p className="">
                    Bansal Institute of Science
                    and Technology, Bhopal
                  </p>
                  <p className="text-muted">
                    B.Tech (Information
                    Technology) Current - 5th Sem
                  </p>
                  <p className="text-muted">
                    2018 - Present
                  </p>
                  <p className="">
                    Kendriya Vidyalaya No. 1,
                    Bhopal
                  </p>
                  <p className="text-muted">
                    Schooling (Maths Science)
                  </p>
                  <p className="text-muted">
                    2007 - 2018
                  </p>
                  <h5 className="">
                    What do i do?
                  </h5>
                  <ul className="">
                    <li className="">
                      Web Development
                    </li>
                    <li className="">
                      Android Development
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-12-xs">
                  <p>
                    I am an Aspiring Full Stack
                    Developer.
                  </p>
                  <p className="">
                    I Like C++ and JavaScript,
                    currently heading towards
                    Mastering Data Structures and
                    Algorithm, Im a beginner in
                    Competitive Programming and
                    practice it in my free time.
                    Open source Development and
                    Contributing Enthusiast. I am
                    learning the MERN Stack.
                  </p>
                  <p className="text-muted">
                    I love listening to English
                    music and playing football.
                  </p>
                  <h5>Tech stack i work with</h5>
                  <div className="container container-icons">
                    <img src={html}></img>
                    <img src={css}></img>
                    <img src={js}></img>
                    <img src={react}></img>
                    <img src={git}></img>
                    <img src={c}></img>
                    <img src={cpp}></img>
                    <img src={github}></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="container_arrow my-5 d-flex justify-content-center  floating arrow-up">
              <a href="#about-1">
                <img
                  id="about-2"
                  className=""
                  src={Arrow}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
