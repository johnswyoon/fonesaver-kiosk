import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/fonesaver-logo.png";
import facebook from "../assets/socials/facebook.png";
import twitter from "../assets/socials/twitter.png";
import instagram from "../assets/socials/instagram.png";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleHandler = () => {
    setOpen(!isOpen);
  };
  return (
    <StyledNav>
      <div>
        <Link to="/">
          <img id="logo" src={logo} alt="FoneSaver Logo" />
        </Link>
        <ToggleButton onClick={toggleHandler}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </ToggleButton>
      </div>
      <div className={isOpen ? "navbar-links active" : "navbar-links"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="https://fone-saver.com/" target="_notarget">
              Corporate
            </a>
          </li>
          <button id="register-box" className="">
            <a href="https://shop.fone-saver.com/" target="_notarget">
              <span>Shop Now</span>
            </a>
          </button>
        </ul>
      </div>
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
  @media (max-width: 950px) {
    flex-direction: column;
    padding: 1rem 0.5rem;
    .navbar-links {
      display: none;
      ul {
        flex-direction: column;
      }
    }
    .active {
      display: flex;
    }
  }
  a {
    color: #444444;
    text-decoration: none;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding-top: 1rem;
    @media (max-width: 950px) {
      justify-content: center;
    }
  }
  li {
    padding-left: 3rem;
    /* position: relative; */
    img {
      min-width: 40px;
      padding: 0rem;
      width: 20%;
      border-radius: 15px;
    }
    @media (max-width: 950px) {
      padding: 0.5rem 0rem;
    }
  }
  button {
    margin-left: 3rem;
    position: relative;
    span {
      color: white;
    }
    @media (max-width: 950px) {
      margin-left: 0rem;
      margin-top: 0.5rem;
      position: static;
    }
  }
  #logo {
    max-height: 7vh;
    @media (max-width: 1150px) {
      display: block;
      margin: auto;
      max-height: 8vh;
    }
  }
  #register-box {
    color: white;
    text-align: center;
    border: none;
    padding: 0.5rem 2rem;
    background: #2b4cfc;
    border-radius: 10px;
    @media (max-width: 1150px) {
      padding: 0.5rem 1.25rem;
    }
  }
`;

const ToggleButton = styled.a`
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  .bar {
    height: 3px;
    width: 100%;
    background-color: #333333;
    border-radius: 15px;
  }
  @media (max-width: 950px) {
    display: flex;
  }
`;

export default Navigation;
