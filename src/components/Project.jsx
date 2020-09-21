import React from "react";
import p1 from "../images/p-1.JPG";
import p2 from "../images/p-2.JPG";
import p3 from "../images/p-3.JPG";
import p4 from "../images/p-4.jpg";
import link from "../images/link-icon.svg";
import github from "../images/github-link.svg";
import "../styles/project.css";

const Project = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-11  mx-auto">
            <h1 className="text-center">
              Project
            </h1>

            <div className="container d-flex justify-content-center">
              <div className="row">
                <div className="col-md-4 col-xs-12 mt-4">
                  <h4 className="text-center text-bolder mb-3">
                    Movie Pedia
                  </h4>
                  <div className="card">
                    <div className="image card-img">
                      <img
                        src={p1}
                        className="card-img-top"
                      ></img>
                      <div class="card-body">
                        <p class="card-text">
                          A Web App to recount all
                          details related to any
                          movie/anime/tv-show/cartoon.
                        </p>
                        <p class="card-text text-bolder d-5 text-muted">
                          JavaScript | AJAX |
                          JQuery | BootStrap
                        </p>
                        <div className="container d-flex justify-content-center mb-3">
                          <a href="https://github.com/Code-Recursion/Movie-Pedia">
                            <img
                              className="mx-2"
                              src={github}
                            ></img>
                          </a>
                          <a href="https://helloajaysingh.me/Movie-Pedia/">
                            <img
                              className="mx-2"
                              src={link}
                            ></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12 mt-4">
                  <h4 className="text-center text-bolder  mb-3">
                    React Porfolio
                  </h4>
                  <div className="card">
                    <div className="image card-img">
                      <img
                        src={p2}
                        className="card-img-top"
                      ></img>
                      <div class="card-body">
                        <p class="card-text">
                          Personal Portfolio for
                          Developers Buit from
                          Scratch Using ReactJS.
                        </p>
                        <p class="card-text text-bolder d-5 text-muted">
                          React | JavaScript |
                          BootStrap
                        </p>
                        <div className="container d-flex justify-content-center mb-3">
                          <a href="https://github.com/Code-Recursion/code-recursion.github.io">
                            <img
                              className="mx-2"
                              src={github}
                            ></img>
                          </a>
                          <a href="https://helloajaysingh.me">
                            <img
                              className="mx-2"
                              src={link}
                            ></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-xs-12 mt-4">
                  <h4 className="text-center text-bolder  mb-3">
                    Todo List App
                  </h4>
                  <div className="card">
                    <div className="image card-img">
                      <img
                        src={p3}
                        className="card-img"
                      ></img>
                      <div class="card-body">
                        <p class="card-text">
                          Simple
                          Todo Notes Application
                          Features like Light weight
                          and Simple UI. Can add
                          images with notes Auto
                          Delete Tasks under 15
                          min if Checked.
                        </p>
                        <p class="card-text text-bolder d-5 text-muted">
                          Kotlin | XML | Android Studio
                        </p>
                        <div className="container d-flex justify-content-center mb-3">
                          <a href="https://github.com/Code-Recursion/code-recursion.github.io">
                            <img
                              className="mx-2"
                              src={github}
                            ></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-xs-12 mt-4">
                  <h4 className="text-center text-bolder  mb-3">
                    Dice Roller
                  </h4>
                  <div className="card">
                    <div className="image card-img">
                      <img
                        src={p4}
                        className="card-img-top"
                      ></img>
                      <div class="card-body">
                        <p class="card-text">
                          An app build while in
                          the part of 30 Days of
                          Kotlin by Google
                          Developers
                        </p>
                        <p class="card-text text-bolder d-5 text-muted">
                          Kotlin | XML | Android Studio
                        </p>

                        <div className="container d-flex justify-content-center mb-3">
                          <a href="https://github.com/Code-Recursion/code-recursion.github.io">
                            <img
                              className="mx-2"
                              src={github}
                            ></img>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
