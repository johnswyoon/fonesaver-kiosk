import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/img/fonesaver-logo.png";

const Navigation = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/">FONESAVER</Link>
      </h1>
      <ul>
        <li>
          <Link to="https://shop.fone-saver.com/">Shop Now</Link>
        </li>
        <li>
          <Link to="https://fone-saver.com/">Corporate</Link>
        </li>
        <li>
          <Link to="/subscribe">Register</Link>
        </li>
      </ul>
      {/* <Navbar bg="light" variant="light" sticky="top">
        <Navbar.Brand href="/">
          <img src={logo} alt="FoneSaver Logo" id="nav-logo" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          <Nav.Link href="/subscribe">Subscribe</Nav.Link>
        </Nav>
      </Navbar> */}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;

  a {
    color: black;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 3rem;
    position: relative;
  }
`;

export default Navigation;
