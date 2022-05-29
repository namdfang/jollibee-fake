import "bootstrap/dist/css/bootstrap.css";
import React from "react";
// import { Router } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Menus from "../pages/Menus/Menus";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menus" component={Menus} />
        </Switch>
      </Router>
    </>
  );
}
