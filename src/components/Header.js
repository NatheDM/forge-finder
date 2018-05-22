import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import beard from "./beard.svg";

const Header = props => {
  return (
    <Navbar inverse fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#" style={{ display: "flex" }}>
            <img src={beard} height={20} />
            ForgeFindr
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">Profile</NavItem>
        <NavItem href="#">Login</NavItem>
        <NavItem href="#">Logout</NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
