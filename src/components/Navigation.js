import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/img/fonesaver-logo.png";

const Navigation = () => {
  return (
    <StyledNav>
      <div>
        <Link to="/">
          <img id="logo" src={logo} alt="FoneSaver Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <a href="https://shop.fone-saver.com/" target="_notarget">
            Shop Now
          </a>
        </li>
        <li>
          <a href="https://fone-saver.com/" target="_notarget">
            Corporate
          </a>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <button id="register-box" className="">
          <Link to="/subscribe">
            <span>Register</span>
          </Link>
        </button>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 10rem;

  a {
    color: #444444;
    text-decoration: none;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding-top: 1rem;
  }
  li {
    padding-left: 3rem;
    /* position: relative; */
  }
  button {
    margin-left: 3rem;
    position: relative;
    span {
      color: white;
    }
  }
  #logo {
    max-height: 7vh;
  }
  #register-box {
    color: white;
    text-align: center;
    border: none;
    padding: 0.5rem 3rem;
    background: #2b4cfc;
    border-radius: 5px;
  }
`;

export default Navigation;
