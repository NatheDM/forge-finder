import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import beard from "./beard.svg";

const Header = props => {
  return (
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
        <LinkContainer exact to="/">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
        <LinkContainer exact to="/profile">
          <NavItem eventKey={2}>Profile</NavItem>
        </LinkContainer>
        <LinkContainer exact to="/login">
          <NavItem eventKey={3}>Login</NavItem>
        </LinkContainer>
        <LinkContainer exact to="/logout">
          <NavItem eventKey={4}>Logout</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Header;
