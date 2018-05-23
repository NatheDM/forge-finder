import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Beard from "./Beard.js";

const Header = props => {
  return (
    <Navbar inverse fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/" style={{ display: "flex" }}>
            <Beard />
            ForgeFindr
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <LinkContainer exact to="/">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
        <LinkContainer exact to="/cast">
          <NavItem eventKey={2}>Cast</NavItem>
        </LinkContainer>
        <LinkContainer to="/profile">
          <NavItem eventKey={3}>Profile</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem eventKey={4}>Login</NavItem>
        </LinkContainer>
        <LinkContainer to="/logout">
          <NavItem eventKey={5}>Logout</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Header;
