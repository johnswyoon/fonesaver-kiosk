import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/fonesaver-logo.png";

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Navbar.Brand href="/">
        <img src={logo} alt="FoneSaver Logo" id="nav-logo" />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#about-us">About Us</Nav.Link>
        <Nav.Link href="#contact-us">Contact Us</Nav.Link>
        <Nav.Link href="/subscribe">Subscribe</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
