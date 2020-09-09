import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Project from "./Project";
import Secret from "./Secret";
import Contact from "./Contact";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route
          exact
          path="/project"
          component={Project}
        />
        <Route
          exact
          path="/contact"
          component={Contact}
        />
        <Route component={Secret} />
      </Switch>
    </>
  );
};

export default App;
