import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/fonesaver-logo.png";
import facebook from "../assets/socials/facebook.png";
import twitter from "../assets/socials/twitter.png";
import instagram from "../assets/socials/instagram.png";

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
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="https://fone-saver.com/" target="_notarget">
            Corporate
          </a>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        {/* <li>
          <a
            href="https://www.facebook.com/FoneSaverService/"
            target="_notarget"
          >
            <img src={facebook} alt="Facebook" />
          </a>
        </li>

        <li>
          <a href="https://twitter.com/FoneSaver" target="_notarget">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/fonesaver/" target="_notarget">
            <img src={instagram} alt="Instagram" />
          </a>
        </li> */}

        <button id="register-box" className="">
          <a href="https://shop.fone-saver.com/" target="_notarget">
            <span>Shop Now</span>
          </a>
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
    img {
      min-width: 40px;
      padding: 0rem;
      width: 20%;
      border-radius: 15px;
    }
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
    padding: 0.5rem 2rem;
    background: #2b4cfc;
    border-radius: 10px;
  }
`;

export default Navigation;
