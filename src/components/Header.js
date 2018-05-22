import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home.js";
import Profile from "./Profile.js";
import Login from "./Login.js";
import Logout from "./Logout.js";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import beard from "./beard.svg";

const Header = props => {
  return (
    <Router>
      <div>
        <Navbar inverse fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" style={{ display: "flex" }}>
                <img src={beard} height={20} alt="brand-logo" />
                ForgeFindr
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            |<NavLink to="/">Home</NavLink> |
            <NavLink to="/profile">Profile</NavLink> |
            <NavLink to="/login">Login</NavLink> |
            <NavLink to="/logout">Logout</NavLink>
          </Nav>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </div>
    </Router>
  );
};

export default Header;
