import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import Homepage from "./HomePage";
import Products from "../components/prducts/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Basket from "../components/prducts/Basket";
import Sale from "../components/Sale";
import Passion from "../components/Passion";
import Gather from "../components/Gather";
import Info from "../components/Info";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Main = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Sidebar toggle={toggle} open={open} />
          <Navbar toggle={toggle} />
          <Home />
          <Products />
          <Sale />
          <Passion />
          <Gather />
          <Info />
          <Contact />
          <Footer />
        </Route>
        <Route exact path="/home">
          <Homepage />
        </Route>
        <Route exact path="/basket">
          <Basket />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
