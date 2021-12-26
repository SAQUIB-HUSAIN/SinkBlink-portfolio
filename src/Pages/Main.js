import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../Layout/Home/Home";
import About from "../Layout/About/About";
import Contact from "../Layout/Contact/Contact";

export default function Main() {
  return (
    <React.Fragment>
      <div>
        <Route path="/" exact>
          <Redirect to="/Home" />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/About" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </div>
    </React.Fragment>
  );
}
