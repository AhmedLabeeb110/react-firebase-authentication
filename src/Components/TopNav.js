import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import Home from "./Home";
import Pricing from "./Pricing";
import Features from "./Features";
import AuthSystem from "./AuthSystem";

import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";


const TopNav = () => {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="TopNav">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Review Nation
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto inner-nav-items">
                <Nav.Link as={Link} to="/Features" style={{ color: "white" }}>
                  Features
                </Nav.Link>
                <Nav.Link as={Link} to="/Pricing" style={{ color: "white" }}>
                  Pricing
                </Nav.Link>
                <Nav.Link as={Link} to="/AboutUs" style={{ color: "white" }}>
                  Why Us
                </Nav.Link>
                <Nav.Link as={Link} to="/AuthSystem" style={{ color: "white" }}>
                  Account
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/Pricing">
          <Pricing />
        </Route>
        <Route path="/Features">
          <Features />
        </Route>
        <Route path="/AuthSystem">
          <AuthSystem />
        </Route>
      
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/dashboard" component={Dashboard} />
        
      </Switch>
    </Router>
  );
};

export default TopNav;
