import React from "react";
// import { Route } from "react-router-dom";
import { Route,Switch } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
const Rout = () =>{

  return (
    <>
      <Switch>
          <Route exact path="/home" Component={Home}></Route>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/contact" Component={Contact}></Route>
          <Route exact path = "/navbar" Component= {Navbar}></Route>
      </Switch>
    </>
  );
}
  
export default Rout;
